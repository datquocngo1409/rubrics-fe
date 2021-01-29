import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeacherAllSubjectComponent} from './teacher-all-subject/teacher-all-subject.component';
import {TeacherPointSubjectComponent} from './teacher-point-subject/teacher-point-subject.component';
import {AddRubricComponent} from './add-rubric/add-rubric.component';
import {DetailPointComponent} from './detail-point/detail-point.component';
import {TeacherTeachingSubjectComponent} from './teacher-teaching-subject/teacher-teaching-subject.component';
import {TeacherTaughtSubjectComponent} from './teacher-taught-subject/teacher-taught-subject.component';
import {TeacherRequestRubricComponent} from './teacher-request-rubric/teacher-request-rubric.component';

const routes: Routes = [
  {
    path: 'subject/list',
    component: TeacherAllSubjectComponent
  },
  {
    path: 'subject/teaching',
    component: TeacherTeachingSubjectComponent
  },
  {
    path: 'subject/taught',
    component: TeacherTaughtSubjectComponent
  },
  {
    path: 'request-rubric',
    component: TeacherRequestRubricComponent
  },
  {
    path: 'subject/:id',
    component: TeacherPointSubjectComponent
  },
  {
    path: 'subject/detail/:classId/:studentId/:ACTION',
    component: DetailPointComponent
  },
  {
    path: 'subject/add-rubric/:id',
    component: AddRubricComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
