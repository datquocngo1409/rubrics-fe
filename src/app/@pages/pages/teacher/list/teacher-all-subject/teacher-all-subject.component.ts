import {Component, OnInit, ViewChild} from '@angular/core';
import {API} from '../../../../../services/apis-call/api.service';
import {MatCalendar} from '@angular/material/datepicker';
import {Moment} from 'moment';
import {Router} from '@angular/router';

@Component({
  selector: 'gts-fe-teacher-all-subject',
  templateUrl: './teacher-all-subject.component.html',
  styleUrls: ['./teacher-all-subject.component.scss']
})
export class TeacherAllSubjectComponent implements OnInit {
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

  viewDetail(id, teacherId) {
    if (teacherId !== this.user.id) {
      alert('You are not teaching this subject');
      return;
    }
    this.router.navigate(['teacher/subject/' + id]);
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
      return 'not-teaching'
    }
  }
}
