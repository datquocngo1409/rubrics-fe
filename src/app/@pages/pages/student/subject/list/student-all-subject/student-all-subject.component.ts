import {Component, OnInit, ViewChild} from '@angular/core';
import {MatCalendar} from '@angular/material/datepicker';
import {Moment} from 'moment';
import {API} from '../../../../../../services/apis-call/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'gts-fe-student-all-subject',
  templateUrl: './student-all-subject.component.html',
  styleUrls: ['./student-all-subject.component.scss']
})
export class StudentAllSubjectComponent implements OnInit {
  @ViewChild('calendar') calendar: MatCalendar<Moment>;
  selectedDate: Moment;
  subjects;
  user;
  constructor(private api: API, private router: Router) { }

  ngOnInit(): void {
    this.api.getAllSubject().subscribe(subjects => {
      this.subjects = subjects;
      this.user = JSON.parse(localStorage.getItem('userProfile'));
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

  getClass(subject) {
    const students = subject.students;
    for (const student of students) {
      if (student.code === this.user.code) {
        if (this.calculateWeek(subject.startDate) >= 16) {
          return 'learned';
        } else {
          return 'learning';
        }
      }
    }
    return 'not-yet-learned';
  }

  viewDetail(subject) {
    if (this.getClass(subject) === 'not-yet-learned') {
      alert('You are not in Class');
      return;
    }
    this.router.navigate(['student/subject/' + subject.id]);
  }
}
