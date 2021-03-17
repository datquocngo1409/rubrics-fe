import {Component, OnInit, ViewChild} from '@angular/core';
import {MatCalendar} from '@angular/material/datepicker';
import {Moment} from 'moment';
import {API} from '../../../../../../services/apis-call/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'gts-fe-student-learning-subject',
  templateUrl: './student-learning-subject.component.html',
  styleUrls: ['./student-learning-subject.component.scss']
})
export class StudentLearningSubjectComponent implements OnInit {
  @ViewChild('calendar') calendar: MatCalendar<Moment>;
  selectedDate: Moment;
  subjects;
  learning = [];
  user;
  constructor(private api: API, private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('userProfile'));
    this.api.getAllSubject().subscribe(subjects => {
      this.subjects = subjects;
      for (const subject of this.subjects) {
        if (this.getClass(subject) === 'learning') {
          this.learning.push(subject);
        }
      }
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
