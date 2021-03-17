import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentAllSubjectComponent } from './subject/list/student-all-subject/student-all-subject.component';
import { StudentLearningSubjectComponent } from './subject/list/student-learning-subject/student-learning-subject.component';
import { StudentStudiedSubjectComponent } from './subject/list/student-studied-subject/student-studied-subject.component';
import { StudentNotyetSubjectComponent } from './subject/list/student-notyet-subject/student-notyet-subject.component';
import {MatCardModule} from '@angular/material/card';
import {TranslateModule} from '@ngx-translate/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { StudentDetailSubjectComponent } from './subject/student-detail-subject/student-detail-subject.component';
import {MatButtonModule} from '@angular/material/button';
import { StudentSubjectStudentsComponent } from './subject/student-subject-students/student-subject-students.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { StudentSubjectPointComponent } from './subject/student-subject-point/student-subject-point.component';
import {MatTableExporterModule} from 'mat-table-exporter';
import {PDFExportModule} from '@progress/kendo-angular-pdf-export';
import {MatTooltipModule} from '@angular/material/tooltip';
import { StudentSubjectRubricComponent } from './subject/student-subject-rubric/student-subject-rubric.component';
import {MatListModule} from '@angular/material/list';
import { StudentSubjectRateComponent } from './subject/student-subject-rate/student-subject-rate.component';
import {NgApexchartsModule} from 'ng-apexcharts';
import {NgCircleProgressModule} from 'ng-circle-progress';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { RatingDialogComponent } from './subject/rating-dialog/rating-dialog.component';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [StudentAllSubjectComponent, StudentLearningSubjectComponent, StudentStudiedSubjectComponent, StudentNotyetSubjectComponent, StudentDetailSubjectComponent, StudentSubjectStudentsComponent, StudentSubjectPointComponent, StudentSubjectRubricComponent, StudentSubjectRateComponent, RatingDialogComponent],
    imports: [
        CommonModule,
        StudentRoutingModule,
        MatCardModule,
        TranslateModule,
        MatDatepickerModule,
        MatButtonModule,
        MatTableModule,
        MatIconModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableExporterModule,
        PDFExportModule,
        MatTooltipModule,
        MatListModule,
        NgApexchartsModule,
        NgCircleProgressModule,
        MatProgressBarModule,
        MatSliderModule,
        FormsModule
    ]
})
export class StudentModule { }
