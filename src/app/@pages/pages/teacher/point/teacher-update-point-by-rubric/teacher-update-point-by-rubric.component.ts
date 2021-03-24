import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {API} from '../../../../../services/apis-call/api.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
    selector: 'gts-fe-teacher-update-point-by-rubric',
    templateUrl: './teacher-update-point-by-rubric.component.html',
    styleUrls: ['./teacher-update-point-by-rubric.component.scss']
})
export class TeacherUpdatePointByRubricComponent implements OnInit {

    subjectId;
    rubricImportantId;
    rubricId;
    subject;
    students;
    data;
    subjectRubricImportants;
    subjectRubricImportant;
    rubricImportants = [];
    pointDatas = [];
    pointSelelct = [];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private api: API,
        public dialog: MatDialog
    ) {
    }

    ngOnInit(): void {
        this.pointSelelct = [];
        for (let i = 10; i >= 0; i = i - 2) {
            this.pointSelelct.push(i);
        }
        this.rubricImportants = [];
        this.pointDatas = [];
        this.subjectId = this.route.snapshot.paramMap.get('subjectId');
        this.rubricImportantId = this.route.snapshot.paramMap.get('rubricImportantId');
        this.api.getDataSubject(this.subjectId).subscribe(data => {
            this.data = data;
            this.subject = this.data.classroomDto;
            this.students = this.subject.students;
            this.api.getRubricImportantsSubject(this.subjectId).subscribe(data1 => {
                this.subjectRubricImportants = data1;
                for (const ri of this.subjectRubricImportants) {
                    if (ri.rubricId == this.rubricImportantId) {
                        this.rubricImportants.push(ri);
                    }
                }
                this.subjectRubricImportant = this.rubricImportants[0];
                for (const strp of this.data.studentTotalRubricPointDtos) {
                    for (const pd of strp.studentRubricPointDtoList) {
                        if (pd.rubricImportantId == this.subjectRubricImportant.id) {
                            this.pointDatas.push(pd);
                        }
                    }
                }
            });
        });
    }

    getText(point) {
        if (point <= 0) {
            return 'Chưa hoàn thành';
        } else if (point <= 2) {
            return 'Hoàn thành, còn mắc nhiều lỗi';
        } else if (point <= 4) {
            return 'Hoàn thành, còn mắc vài lỗi';
        } else if (point <= 6) {
            return 'Hoàn thành, đúng hạn';
        } else if (point <= 8) {
            return 'Hoàn thành tốt, đúng hạn, chất lượng ổn';
        } else if (point <= 10) {
            return 'Hoàn thành xuất sắc, đúng hạn, chất lượng tốt';
        }
    }

    onCancel() {

    }

    onSubmit() {
        this.api.updatePoints(this.subjectId, this.pointDatas).subscribe(next => {
            this.router.navigate(['/teacher/subject/' + this.subjectId]);
        })
    }
}
