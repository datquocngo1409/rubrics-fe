import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {API} from '../../../../../services/apis-call/api.service';

@Component({
    selector: 'gts-fe-student-subject',
    templateUrl: './student-subject.component.html',
    styleUrls: ['./student-subject.component.scss']
})
export class StudentSubjectComponent implements OnInit {
    detailForm: FormGroup;
    submitted = false;
    public id;
    public subject;
    public ACTION;
    public students;
    choosedStudent = [];
    unchoosedStudent = [];
    selectedChoosed = [];
    selectedUnchoosed = [];
    currentUser;
    oldStudentIDList = '';
    newStudentIDList = '';

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
                name: ['', Validators.required],
                devicesDto: [],
                accountId: [],
            });
            const id = +this.route.snapshot.paramMap.get('id');
            this.id = id;
            this.api.getSubjectById(this.id).subscribe(subject => this.subject = subject);
            this.api.getSubjectById(id).subscribe(subject => {
                this.subject = subject;
                this.detailForm.patchValue(this.subject);
                this.api.getAllStudent().subscribe(students => {
                    this.students = students;
                    if (this.subject.students !== null) {
                        for (const student of this.subject.students) {
                            this.oldStudentIDList = this.oldStudentIDList + student.id + ',';
                        }
                        this.oldStudentIDList = this.oldStudentIDList.substring(0, this.oldStudentIDList.length - 1);
                    }
                    this.choosedStudent = this.subject.students;
                    this.unchoosedStudent = [];
                    this.selectedChoosed = [];
                    this.selectedUnchoosed = [];
                    for (const student of this.students) {
                        const d = {id: student.id, username: student.username, name: student.name};
                        this.unchoosedStudent.push(d);
                    }
                    if (this.choosedStudent !== null) {
                        for (const student of this.choosedStudent) {
                            const d = this.unchoosedStudent.find(item => item.id === student.id);
                            if (d !== undefined) {
                                this.unchoosedStudent.splice(this.unchoosedStudent.indexOf(d), 1);
                            }
                        }
                    }
                });
            });
        });
    }

    get f() {
        return this.detailForm.controls;
    }

    onSubmit() {
        if (this.choosedStudent !== null) {
            this.newStudentIDList = '';
            for (const student of this.choosedStudent) {
                this.newStudentIDList = this.newStudentIDList + student.id + ',';
            }
            this.newStudentIDList = this.newStudentIDList.substring(0, this.newStudentIDList.length - 1);
            const oldArray = this.oldStudentIDList.split(',');
            const newArray = this.newStudentIDList.split(',');
            let add = '';
            let del = '';
            for (const id of newArray) {
                const d = oldArray.find(item => item === id);
                if (d === undefined) {
                    add = add + id + ',';
                }
            }

            for (const id of oldArray) {
                const d = newArray.find(item => item === id);
                if (d === undefined) {
                    del = del + id + ',';
                }
            }
            del = del.substring(0, del.length - 1);
            add = add.substring(0, add.length - 1);
            if (del === '' && add === '') {
                this.router.navigate(['/admin/subject/']);
            } else {
                if (del !== '') {
                    const dataDel = {
                        studentIdList: del
                    }
                    this.api.deleteStudentsToSubject(this.id, dataDel).subscribe(next => {
                        if (add !== '') {
                            const dataAdd = {
                                studentIdList: add
                            }
                            this.api.addStudentsToSubject(this.id, dataAdd).subscribe(end => {
                                this.router.navigate(['/admin/subject/']);
                            })
                        } else {
                            this.router.navigate(['/admin/subject/']);
                        }
                    })
                } else {
                    const dataAdd = {
                        studentIdList: add
                    }
                    this.api.addStudentsToSubject(this.id, dataAdd).subscribe(end => {
                        this.router.navigate(['/admin/subject/']);
                    })
                }
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
            listDeivceToRemove.push(this.choosedStudent[i]);
        }
        this.unchoosedStudent = this.addList(this.unchoosedStudent, listDeivceToRemove);
        this.choosedStudent = this.removeList(this.choosedStudent, listDeivceToRemove);
        this.selectedChoosed = [];
    }

    choosed() {
        const listDeviceToAdd = [];
        for (const i of this.selectedUnchoosed) {
            listDeviceToAdd.push(this.unchoosedStudent[i]);
        }
        this.choosedStudent = this.addList(this.choosedStudent, listDeviceToAdd);
        this.unchoosedStudent = this.removeList(this.unchoosedStudent, listDeviceToAdd);
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
}
