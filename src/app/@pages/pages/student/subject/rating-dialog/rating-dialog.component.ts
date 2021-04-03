import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {ChartComponent} from 'ng-apexcharts';
import {ActivatedRoute, Router} from '@angular/router';
import {API} from '../../../../../services/apis-call/api.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ChartOptions} from '../student-subject-rate/student-subject-rate.component';

@Component({
    selector: 'gts-fe-rating-dialog',
    templateUrl: './rating-dialog.component.html',
    styleUrls: ['./rating-dialog.component.scss']
})
export class RatingDialogComponent implements OnInit {
    nowRate;
    ratings;
    subject;
    value = 100;
    content = '';
    user;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private api: API,
        public dialogRef: MatDialogRef<RatingDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
    }

    ngOnInit(): void {
        this.user = JSON.parse(localStorage.getItem('userProfile'));
        this.subject = this.data.subject;
        this.api.getSubjectRating(this.subject.id).subscribe(nowRate => {
            this.nowRate = nowRate;
            this.api.getAllRatingBySubject(this.subject.id).subscribe(ratings => {
                this.ratings = ratings;
            });
        });
    }

    calculateWeek(startDate) {
        if (startDate !== null) {
            const data = startDate.split('-');
            const startDateDate = new Date();
            startDateDate.setDate(data[2]);
            startDateDate.setMonth(data[1] - 1);
            startDateDate.setFullYear(data[0]);
            const now = new Date();
            const seconds = (now.getTime() - startDateDate.getTime()) / 1000;
            return Math.floor(seconds / (60 * 60 * 24 * 7));
        }
    }

    rate(id, value: number) {
        const data = {
            studentId: this.user.id,
            subjectId: this.subject.id,
            point: this.value,
            content: this.content
        }
        this.api.rate(this.subject.id, data).subscribe(next => {
            this.router.navigate(['student/subject/' + this.subject.id]);
            this.dialogRef.close();
        });
    }

    cancel() {
        this.dialogRef.close();
    }
}
