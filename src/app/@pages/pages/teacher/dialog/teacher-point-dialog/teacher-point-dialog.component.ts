import {Component, OnInit, Inject} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {API} from '../../../../../services/apis-call/api.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
    selector: 'gts-fe-teacher-point-dialog',
    templateUrl: './teacher-point-dialog.component.html',
    styleUrls: ['./teacher-point-dialog.component.scss']
})
export class TeacherPointDialogComponent implements OnInit {
    classId;
    studentId;
    studentPoints;
    studentPoint;
    student;
    ACTION;
    formGroup: FormGroup;
    pointSelelct = [];
    totalPoint = 0;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder,
        private api: API,
        public dialog: MatDialogRef<TeacherPointDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { classId: number, studentId: number }
    ) {
    }

    ngOnInit(): void {
        for (let i = 10; i >= 0; i = i - 0.25) {
            this.pointSelelct.push(i);
        }
        this.classId = this.data.classId;
        this.studentId = this.data.studentId;
        this.api.getDataDetailSubject(this.classId, this.studentId).subscribe(data => {
            this.studentPoints = data;
            this.studentPoint = this.studentPoints[0];
            for (const object of this.studentPoint.studentRubricPointDtoList) {
                this.totalPoint += object.rubricImportantImportant;
            }
            this.studentPoint.studentRubricPointDtoList.sort(
                (a, b) => (a.rubricImportantImportant > b.rubricImportantImportant ? -1 : 1)
            );
            this.student = {
                code: this.studentPoint.studentRubricPointDtoList[0].studentCode,
                name: this.studentPoint.studentRubricPointDtoList[0].studentName
            };
        });
    }

    onSubmit() {

    }

    onCancel() {
        this.dialog.close();
    }
}
