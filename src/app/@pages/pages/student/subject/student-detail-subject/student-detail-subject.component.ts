import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {API} from '../../../../../services/apis-call/api.service';

@Component({
    selector: 'gts-fe-student-detail-subject',
    templateUrl: './student-detail-subject.component.html',
    styleUrls: ['./student-detail-subject.component.scss']
})
export class StudentDetailSubjectComponent implements OnInit {

    subject;
    weekNumber;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private api: API
    ) {
    }

    ngOnInit(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.weekNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        this.api.getSubjectById(id).subscribe(subject => {
          this.subject = subject;
        })
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

    getWeekColor(wNum, startDate) {
        if (wNum <= this.calculateWeek(startDate)) {
            return 'learned';
        }
        return '';
    }

    goStudentList(id) {
        this.router.navigate(['student/subject/students/' + id]);
    }

    goViewPoint(id) {
        this.router.navigate(['student/subject/point/' + id]);
    }

    goViewRubric(id) {
        this.router.navigate(['student/subject/rubric/' + id]);
    }

    goRate(id) {
        this.router.navigate(['student/subject/rate/' + id]);
    }
}
