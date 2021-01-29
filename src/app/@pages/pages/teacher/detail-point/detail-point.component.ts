import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {API} from '../../../../services/apis-call/api.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'gts-fe-detail-point',
    templateUrl: './detail-point.component.html',
    styleUrls: ['./detail-point.component.scss']
})
export class DetailPointComponent implements OnInit {
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
        private api: API
    ) {
    }

    ngOnInit(): void {
        for (let i = 10; i >= 0; i = i - 0.25) {
            this.pointSelelct.push(i);
        }
        this.ACTION = this.route.snapshot.paramMap.get('ACTION');
        this.classId = this.route.snapshot.paramMap.get('classId');
        this.studentId = this.route.snapshot.paramMap.get('studentId');
        this.api.getDataDetailSubject(this.classId, this.studentId).subscribe(data => {
            this.studentPoints = data;
            this.studentPoint = this.studentPoints[0];
            for (const object of this.studentPoint.studentRubricPointDtoList) {
                this.totalPoint += object.rubricImportantImportant;
            }
            this.studentPoint.studentRubricPointDtoList.sort(
                (a, b) => (a.rubricImportantImportant > b.rubricImportantImportant ? -1 : 1)
            );
            if (this.ACTION === 'edit') {
                this.student = {
                    code: this.studentPoint.studentRubricPointDtoList[0].studentCode,
                    name: this.studentPoint.studentRubricPointDtoList[0].studentName
                };
            }
        });
    }

    onSubmit() {
        const data = [];
        for (const sp of this.studentPoint.studentRubricPointDtoList) {
            const d = {
                studentId: sp.studentId,
                rubricImportantId: sp.rubricImportantId,
                point: sp.point
            }
            data.push(d);
        }
        this.api.updatePoints(this.classId, data).subscribe(next => {
            this.router.navigate(['/teacher/subject/' + this.classId]);
        })
    }

    onCancel() {
        this.router.navigate(['/teacher/subject/' + this.classId]);
    }
}
