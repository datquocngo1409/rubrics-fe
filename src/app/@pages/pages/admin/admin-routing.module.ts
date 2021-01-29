import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListStudentComponent} from './student/list-student/list-student.component';
import {DetailStudentComponent} from './student/detail-student/detail-student.component';
import {ListTeacherComponent} from './teacher/list-teacher/list-teacher.component';
import {DetailTeacherComponent} from './teacher/detail-teacher/detail-teacher.component';
import {ListRubricComponent} from './rubric/list-rubric/list-rubric.component';
import {DetailRubricComponent} from './rubric/detail-rubric/detail-rubric.component';
import {ListSubjectComponent} from './subject/list-subject/list-subject.component';
import {DetailSubjectComponent} from './subject/detail-subject/detail-subject.component';
import {StudentSubjectComponent} from './subject/student-subject/student-subject.component';
import {RubricSubjectComponent} from './subject/rubric-subject/rubric-subject.component';
import {RequestRubricComponent} from './request/request-rubric/request-rubric.component';
import {DetailRequestRubricComponent} from './request/detail-request-rubric/detail-request-rubric.component';

const routes: Routes = [
  {
    path: 'student',
    component: ListStudentComponent
  },
  {
    path: 'student/:id',
    component: DetailStudentComponent
  },
  {
    path: 'teacher',
    component: ListTeacherComponent
  },
  {
    path: 'teacher/:id',
    component: DetailTeacherComponent
  },
  {
    path: 'rubric',
    component: ListRubricComponent
  },
  {
    path: 'rubric/:id',
    component: DetailRubricComponent
  },
  {
    path: 'request-rubric',
    component: RequestRubricComponent
  },
  {
    path: 'request-rubric/:id',
    component: DetailRequestRubricComponent
  },
  {
    path: 'subject',
    component: ListSubjectComponent
  },
  {
    path: 'subject/:id/student',
    component: StudentSubjectComponent
  },
  {
    path: 'subject/:id/rubric',
    component: RubricSubjectComponent
  },
  {
    path: 'subject/:id',
    component: DetailSubjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
