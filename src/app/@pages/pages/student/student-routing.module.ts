import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentAllSubjectComponent} from './subject/list/student-all-subject/student-all-subject.component';
import {StudentLearningSubjectComponent} from './subject/list/student-learning-subject/student-learning-subject.component';
import {StudentStudiedSubjectComponent} from './subject/list/student-studied-subject/student-studied-subject.component';
import {StudentNotyetSubjectComponent} from './subject/list/student-notyet-subject/student-notyet-subject.component';
import {StudentDetailSubjectComponent} from './subject/student-detail-subject/student-detail-subject.component';
import {StudentSubjectStudentsComponent} from './subject/student-subject-students/student-subject-students.component';
import {StudentSubjectPointComponent} from './subject/student-subject-point/student-subject-point.component';
import {StudentSubjectRubricComponent} from './subject/student-subject-rubric/student-subject-rubric.component';
import {StudentSubjectRateComponent} from './subject/student-subject-rate/student-subject-rate.component';
import {YourPointComponent} from './statistical/your-point/your-point.component';
import {StudentStatisticalSubjectListComponent} from './statistical/student-statistical-subject-list/student-statistical-subject-list.component';
import {StudentStatisticalSubjectDetailComponent} from './statistical/student-statistical-subject-detail/student-statistical-subject-detail.component';

const routes: Routes = [
  {
    path: 'subject/list',
    component: StudentAllSubjectComponent
  },
  {
    path: 'subject/learning',
    component: StudentLearningSubjectComponent
  },
  {
    path: 'subject/studied',
    component: StudentStudiedSubjectComponent
  },
  {
    path: 'subject/not-yet',
    component: StudentNotyetSubjectComponent
  },
  {
    path: 'subject/:id',
    component: StudentDetailSubjectComponent
  },
  {
    path: 'subject/students/:id',
    component: StudentSubjectStudentsComponent
  },
  {
    path: 'subject/point/:id',
    component: StudentSubjectPointComponent
  },
  {
    path: 'subject/rubric/:id',
    component: StudentSubjectRubricComponent
  },
  {
    path: 'subject/rate/:id',
    component: StudentSubjectRateComponent
  },
  {
    path: 'statistical/your-point',
    component: YourPointComponent
  },
  {
    path: 'statistical/subject',
    component: StudentStatisticalSubjectListComponent
  },
  {
    path: 'statistical/subject/:id',
    component: StudentStatisticalSubjectDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
