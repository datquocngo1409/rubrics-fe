import {Component, OnInit, ViewChild} from '@angular/core';
import {API} from '../../../../../../services/apis-call/api.service';
import {MatCalendar} from '@angular/material/datepicker';
import {Moment} from 'moment';
import {Router} from '@angular/router';

@Component({
  selector: 'gts-fe-admin-statistical-list-teacher',
  templateUrl: './admin-statistical-list-teacher.component.html',
  styleUrls: ['./admin-statistical-list-teacher.component.scss']
})
export class AdminStatisticalListTeacherComponent implements OnInit {
  @ViewChild('calendar') calendar: MatCalendar<Moment>;
  selectedDate: Moment;

  teachers;
  constructor(
      private api: API,
      private router: Router
  ) { }

  ngOnInit(): void {
    this.api.getAllTeacher().subscribe(teachers => {
      this.teachers = teachers;
    })
  }

  viewDetail(id) {
    this.router.navigate(['admin/statistical/teacher/' + id]);

  }
}
