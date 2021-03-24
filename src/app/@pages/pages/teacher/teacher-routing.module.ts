import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeacherAllSubjectComponent} from './list/teacher-all-subject/teacher-all-subject.component';
import {TeacherPointSubjectComponent} from './point/teacher-point-subject/teacher-point-subject.component';
import {AddRubricComponent} from './add-rubric/add-rubric.component';
import {DetailPointComponent} from './point/detail-point/detail-point.component';
import {TeacherTeachingSubjectComponent} from './list/teacher-teaching-subject/teacher-teaching-subject.component';
import {TeacherTaughtSubjectComponent} from './list/teacher-taught-subject/teacher-taught-subject.component';
import {TeacherRequestRubricComponent} from './list/teacher-request-rubric/teacher-request-rubric.component';
import {TeacherUpdatePointRubricListComponent} from './point/teacher-update-point-rubric-list/teacher-update-point-rubric-list.component';
import {TeacherUpdatePointByRubricComponent} from './point/teacher-update-point-by-rubric/teacher-update-point-by-rubric.component';
import {TeacherStatisticalListSubjectComponent} from './statistical/teacher-statistical-list-subject/teacher-statistical-list-subject.component';
import {TeacherStatisticalDetailSubjectComponent} from './statistical/teacher-statistical-detail-subject/teacher-statistical-detail-subject.component';
import {TeacherStatisticalTeacherComponent} from './statistical/teacher-statistical-teacher/teacher-statistical-teacher.component';

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
  },
  {
    path: 'subject/update-point/rubric/:id',
    component: TeacherUpdatePointRubricListComponent
  },
  {
    path: 'subject/:subjectId/point/filterRubric/:rubricImportantId',
    component: TeacherUpdatePointByRubricComponent
  },
  {
    path: 'statistical/subject',
    component: TeacherStatisticalListSubjectComponent
  },
  {
    path: 'statistical/subject/:id',
    component: TeacherStatisticalDetailSubjectComponent
  },
  {
    path: 'statistical/teacher',
    component: TeacherStatisticalTeacherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
