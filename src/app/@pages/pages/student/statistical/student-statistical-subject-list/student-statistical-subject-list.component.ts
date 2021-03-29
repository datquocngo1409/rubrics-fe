import {Component, OnInit, ViewChild} from '@angular/core';
import {MatCalendar} from '@angular/material/datepicker';
import {Moment} from 'moment';
import {API} from '../../../../../services/apis-call/api.service';
import {Router} from '@angular/router';

@Component({
    selector: 'gts-fe-student-statistical-subject-list',
    templateUrl: './student-statistical-subject-list.component.html',
    styleUrls: ['./student-statistical-subject-list.component.scss']
})
export class StudentStatisticalSubjectListComponent implements OnInit {
    @ViewChild('calendar') calendar: MatCalendar<Moment>;
    selectedDate: Moment;
    data;
    subjects = [];
    user;

    constructor(private api: API, private router: Router) {
    }

    ngOnInit(): void {
        this.api.getAllSubject().subscribe(subjects => {
            this.data = subjects;
            this.user = JSON.parse(localStorage.getItem('userProfile'));
            for (const object of this.data) {
                this.subjects.push(object);
            }
        });
    }

    viewDetail(id, teacherId) {
        this.router.navigate(['student/statistical/subject/' + id]);
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

    isTeaching(teacherId: any, startDate: any) {
        if (this.calculateWeek(startDate) >= 16) {
            return 'taught';
        }
        if (teacherId === this.user.id) {
            return 'teaching';
        } else {
            return 'not-teaching';
        }
    }
}
