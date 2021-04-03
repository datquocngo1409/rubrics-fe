import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {API} from '../../../../../services/apis-call/api.service';

@Component({
    selector: 'gts-fe-rubric-subject',
    templateUrl: './rubric-subject.component.html',
    styleUrls: ['./rubric-subject.component.scss']
})
export class RubricSubjectComponent implements OnInit {
    detailForm: FormGroup;
    submitted = false;
    public id;
    public subject;
    public ACTION;
    public rubrics;
    choosedRubric = [];
    unchoosedRubric = [];
    selectedChoosed = [];
    selectedUnchoosed = [];
    currentUser;
    oldRubricIDList = '';
    newRubricIDList = '';
    totalPoint = 0;

    subjectRubricImportants;

    constructor(
        private route: ActivatedRoute,
        private formBuild: FormBuilder,
        private router: Router,
        private api: API
    ) {
    }

    ngOnInit() {
        // get action
        this.route.paramMap.subscribe(params => {
            this.ACTION = params.get('edit');
            this.detailForm = this.formBuild.group({
                id: [''],
            });
            const id = +this.route.snapshot.paramMap.get('id');
            this.id = id;
            this.api.getAllRubric().subscribe(rubrics => {
                this.rubrics = rubrics;
                this.api.getRubricImportantsSubject(this.id).subscribe(subjectRubricImportant => {
                    this.subjectRubricImportants = subjectRubricImportant;
                    if (this.subjectRubricImportants !== null) {
                        for (const rubric of this.subjectRubricImportants) {
                            this.totalPoint = this.totalPoint + rubric.important;
                            this.oldRubricIDList = this.oldRubricIDList + '[' + rubric.id + ',' + rubric.rubricId + ',' + rubric.important + ']' + ';';
                        }
                        this.oldRubricIDList = this.oldRubricIDList.substring(0, this.oldRubricIDList.length - 1);
                    } else {
                        this.totalPoint = 0;
                        this.oldRubricIDList = '';
                    }
                    this.choosedRubric = this.subjectRubricImportants;
                    this.choosedRubric.sort((a, b) => (a.important > b.important ? -1 : 1));
                    this.unchoosedRubric = [];
                    this.selectedChoosed = [];
                    this.selectedUnchoosed = [];
                    for (const rubric of this.rubrics) {
                      const d = {id: rubric.id, rubricId: rubric.id, rubricName: rubric.name, important: 1};
                      this.unchoosedRubric.push(d);
                    }
                    if (this.choosedRubric !== null) {
                      for (const rubricImportant of this.choosedRubric) {
                        const d = this.unchoosedRubric.find(item => item.rubricId === rubricImportant.rubricId);
                        if (d !== undefined) {
                          this.unchoosedRubric.splice(this.unchoosedRubric.indexOf(d), 1);
                        }
                      }
                    } else {
                        this.choosedRubric = [];
                    }
                });
            });
        });
    }

    get f() {
        return this.detailForm.controls;
    }

    onSubmit() {
        this.newRubricIDList = '';
        if (this.choosedRubric !== null) {
            for (const rubric of this.choosedRubric) {
                this.newRubricIDList = this.newRubricIDList + '[' + rubric.id + ',' + rubric.rubricId + ',' + rubric.important + ']' + ';';
            }
            this.newRubricIDList = this.newRubricIDList.substring(0, this.newRubricIDList.length - 1);
        }
        const rubricOldArrayString = this.oldRubricIDList.split(';');
        const rubricNewArrayString = this.newRubricIDList.split(';');
        const rubricOldArray = [];
        const rubricNewArray = [];
        for (let rubric of rubricOldArrayString) {
            rubric = rubric.substring(1, rubric.length - 1);
            const data = rubric.split(',');
            const d = {
                id: data[0],
                rubricId: data[1],
                important: data[2]
            }
            rubricOldArray.push(d);
        }
        for (let rubric of rubricNewArrayString) {
            rubric = rubric.substring(1, rubric.length - 1);
            const data = rubric.split(',');
            const d = {
                id: data[0],
                rubricId: data[1],
                important: data[2]
            }
            rubricNewArray.push(d);
        }
        const changeList = [];
        for (const rubricOld of rubricOldArray) {
            for (const rubricNew of rubricNewArray) {
                if (rubricOld.rubricId === rubricNew.rubricId && rubricOld.important !== rubricNew.important) {
                    changeList.push(rubricNew);
                }
            }
        }
        let addList = [];
        for (const rubric of rubricNewArray) {
            const d = rubricOldArray.find(item => item.rubricId === rubric.rubricId);
            if (d === undefined) {
                addList.push(rubric);
            }
        }
        if (addList.length === 1 && addList[0].important === undefined) {
            console.log('hello');
            addList = [];
        }
        const delList = [];
        for (const rubric of rubricOldArray) {
            const d = rubricNewArray.find(item => item.rubricId === rubric.rubricId);
            if (d === undefined) {
                delList.push(rubric)
            }
        }
        if (changeList.length > 0) {
            const data = [];
            for (const rubric of changeList) {
                const d = {
                    rubricImportantId: Number.parseInt(rubric.id, 10),
                    newImportant: Number.parseInt(rubric.important, 10)
                }
                data.push(d);
            }
            this.api.updateRubricImportants(this.id, data).subscribe(next => {
                if (addList.length > 0) {
                    let rubricIdList = '';
                    let importantIdList = ''
                    for (const add of addList) {
                        rubricIdList = rubricIdList + add.rubricId + ',';
                        importantIdList = importantIdList + add.important + ',';
                    }
                    rubricIdList = rubricIdList.substring(0, rubricIdList.length - 1);
                    importantIdList = importantIdList.substring(0, importantIdList.length - 1);
                    const dataAdd = {
                        rubricIdList: rubricIdList,
                        importantIdList: importantIdList
                    }
                    this.api.addRubricsToSubject(this.id, dataAdd).subscribe(nextAdd => {
                        if (delList.length > 0) {
                            let rubricImportantIdList = '';
                            for (const del of delList) {
                                rubricImportantIdList = rubricImportantIdList + del.id + ',';
                            }
                            rubricImportantIdList = rubricImportantIdList.substring(0, rubricImportantIdList.length - 1);
                            const dataDel = {
                                rubricImportantIdList: rubricImportantIdList
                            }
                            this.api.deleteRubricsToSubject(this.id, dataDel).subscribe(nextDel => {
                                this.router.navigate(['/admin/subject']);
                            })
                        } else {
                            this.router.navigate(['/admin/subject']);
                        }
                    })
                } else if (delList.length > 0) {
                    let rubricImportantIdList = '';
                    for (const del of delList) {
                        rubricImportantIdList = rubricImportantIdList + del.id + ',';
                    }
                    rubricImportantIdList = rubricImportantIdList.substring(0, rubricImportantIdList.length - 1);
                    const dataDel = {
                        rubricImportantIdList: rubricImportantIdList
                    }
                    this.api.deleteRubricsToSubject(this.id, dataDel).subscribe(nextDel => {
                        this.router.navigate(['/admin/subject']);
                    })
                } else {
                    this.router.navigate(['/admin/subject']);
                }
            })
        } else {
            console.log(addList);
            if (addList.length > 0) {
                let rubricIdList = '';
                let importantIdList = ''
                for (const add of addList) {
                    rubricIdList = rubricIdList + add.rubricId + ',';
                    importantIdList = importantIdList + add.important + ',';
                }
                rubricIdList = rubricIdList.substring(0, rubricIdList.length - 1);
                importantIdList = importantIdList.substring(0, importantIdList.length - 1);
                const dataAdd = {
                    rubricIdList: rubricIdList,
                    importantIdList: importantIdList
                }
                this.api.addRubricsToSubject(this.id, dataAdd).subscribe(nextAdd => {
                    if (delList.length > 0) {
                        let rubricImportantIdList = '';
                        for (const del of delList) {
                            rubricImportantIdList = rubricImportantIdList + del.id + ',';
                        }
                        rubricImportantIdList = rubricImportantIdList.substring(0, rubricImportantIdList.length - 1);
                        const dataDel = {
                            rubricImportantIdList: rubricImportantIdList
                        }
                        this.api.deleteRubricsToSubject(this.id, dataDel).subscribe(nextDel => {
                            this.router.navigate(['/admin/subject']);
                        })
                    } else {
                        this.router.navigate(['/admin/subject']);
                    }
                })
            } else if (delList.length > 0) {
                let rubricImportantIdList = '';
                for (const del of delList) {
                    rubricImportantIdList = rubricImportantIdList + del.id + ',';
                }
                rubricImportantIdList = rubricImportantIdList.substring(0, rubricImportantIdList.length - 1);
                const data = {
                    rubricImportantIdList: rubricImportantIdList
                }
                this.api.deleteRubricsToSubject(this.id, data).subscribe(next => {
                    this.router.navigate(['/admin/subject']);
                })
            }
        }
    }

    onCancel() {
        this.router.navigate(['/admin/subject']);
    }

    unchoosed() {
        if (this.ACTION === 'view') {
            return;
        }
        const listDeivceToRemove = [];
        for (const i of this.selectedChoosed) {
            listDeivceToRemove.push(this.choosedRubric[i]);
        }
        this.unchoosedRubric = this.addList(this.unchoosedRubric, listDeivceToRemove);
        this.choosedRubric = this.removeList(this.choosedRubric, listDeivceToRemove);
        this.recalculateTotalPoint();
        this.selectedChoosed = [];
    }

    choosed() {
        const listDeviceToAdd = [];
        for (const i of this.selectedUnchoosed) {
            listDeviceToAdd.push(this.unchoosedRubric[i]);
        }
        this.choosedRubric = this.addList(this.choosedRubric, listDeviceToAdd);
        this.unchoosedRubric = this.removeList(this.unchoosedRubric, listDeviceToAdd);
        this.recalculateTotalPoint();
        this.selectedUnchoosed = [];
    }

    addList(rootList, addList) {
        if (rootList === null) {
            rootList = [];
        }
        for (const d of addList) {
            rootList.push(d);
        }
        return rootList;
    }

    removeList(rootList, removeList) {
        for (const d of removeList) {
            rootList.splice(rootList.indexOf(d), 1);
        }
        return rootList;
    }

    selectChoosedDevice(index: number) {
        if (this.ACTION === 'view') {
            return;
        }
        if (this.selectedChoosed.indexOf(index) < 0) {
            this.selectedChoosed.push(index);
        } else {
            this.selectedChoosed.splice(this.selectedChoosed.indexOf(index), 1);
        }
    }

    selectUnchoosedDevice(index: number) {
        if (this.ACTION === 'view') {
            return;
        }
        if (this.selectedUnchoosed.indexOf(index) < 0) {
            this.selectedUnchoosed.push(index);
        } else {
            this.selectedUnchoosed.splice(this.selectedUnchoosed.indexOf(index), 1);
        }
    }

    isSelectedChoosed(i: number) {
        if (this.selectedChoosed.indexOf(i) < 0) {
            return 'unselected';
        }
        return 'selected';
    }

    isSelectedUnchoosed(i: number) {
        if (this.selectedUnchoosed.indexOf(i) < 0) {
            return 'unselected';
        }
        return 'selected';
    }

    isView(ACTION: any) {
        if (ACTION === 'view') {
            return 'viewAction';
        }
        return '';
    }

    recalculateTotalPoint() {
        this.totalPoint = 0;
        for (const rubric of this.choosedRubric) {
            this.totalPoint = this.totalPoint + rubric.important;
        }
    }
}
