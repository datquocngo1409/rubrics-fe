import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListStudentComponent } from './student/list-student/list-student.component';
import {TranslateModule} from '@ngx-translate/core';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DetailStudentComponent } from './student/detail-student/detail-student.component';
import {FlexModule} from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { ListTeacherComponent } from './teacher/list-teacher/list-teacher.component';
import { DetailTeacherComponent } from './teacher/detail-teacher/detail-teacher.component';
import { ListRubricComponent } from './rubric/list-rubric/list-rubric.component';
import { DetailRubricComponent } from './rubric/detail-rubric/detail-rubric.component';
import { ListSubjectComponent } from './subject/list-subject/list-subject.component';
import { DetailSubjectComponent } from './subject/detail-subject/detail-subject.component';
import {MatSelectModule} from '@angular/material/select';
import { StudentSubjectComponent } from './subject/student-subject/student-subject.component';
import { RubricSubjectComponent } from './subject/rubric-subject/rubric-subject.component';
import { RequestRubricComponent } from './request/request-rubric/request-rubric.component';
import { DetailRequestRubricComponent } from './request/detail-request-rubric/detail-request-rubric.component';


@NgModule({
  declarations: [ListStudentComponent, DetailStudentComponent, ListTeacherComponent, DetailTeacherComponent, ListRubricComponent, DetailRubricComponent, ListSubjectComponent, DetailSubjectComponent, StudentSubjectComponent, RubricSubjectComponent, RequestRubricComponent, DetailRequestRubricComponent],
    imports: [
        CommonModule,
        AdminRoutingModule,
        TranslateModule,
        MatTableModule,
        MatSortModule,
        MatButtonModule,
        MatTooltipModule,
        MatIconModule,
        MatPaginatorModule,
        FlexModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatCardModule,
        MatDividerModule,
        MatSelectModule,
        FormsModule
    ]
})
export class AdminModule { }
