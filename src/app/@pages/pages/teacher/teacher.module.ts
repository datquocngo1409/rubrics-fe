import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TeacherRoutingModule} from './teacher-routing.module';
import {TeacherAllSubjectComponent} from './teacher-all-subject/teacher-all-subject.component';
import {TranslateModule} from '@ngx-translate/core';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {TeacherPointSubjectComponent} from './teacher-point-subject/teacher-point-subject.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {AddRubricComponent} from './add-rubric/add-rubric.component';
import {AdminRoutingModule} from '../admin/admin-routing.module';
import {MatSortModule} from '@angular/material/sort';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule} from '@angular/material/paginator';
import {FlexModule} from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import { DetailPointComponent } from './detail-point/detail-point.component';
import { TeacherTeachingSubjectComponent } from './teacher-teaching-subject/teacher-teaching-subject.component';
import { TeacherTaughtSubjectComponent } from './teacher-taught-subject/teacher-taught-subject.component';
import {MatTableExporterModule} from 'mat-table-exporter';
import {PDFModule} from '@progress/kendo-angular-grid';
import {PDFExportModule} from '@progress/kendo-angular-pdf-export';
import { TeacherPointDialogComponent } from './dialog/teacher-point-dialog/teacher-point-dialog.component';
import { TeacherRequestRubricComponent } from './teacher-request-rubric/teacher-request-rubric.component';


@NgModule({
    declarations: [TeacherAllSubjectComponent, TeacherPointSubjectComponent, AddRubricComponent, DetailPointComponent, TeacherTeachingSubjectComponent, TeacherTaughtSubjectComponent, TeacherPointDialogComponent, TeacherRequestRubricComponent],
    imports: [
        CommonModule,
        TeacherRoutingModule,
        TranslateModule,
        MatCardModule,
        MatDatepickerModule,
        MatTableModule,
        MatButtonModule,
        MatSortModule,
        MatTooltipModule,
        MatIconModule,
        MatPaginatorModule,
        FlexModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatDividerModule,
        MatSelectModule,
        FormsModule,
        MatTableExporterModule,
        PDFModule,
        PDFExportModule
    ]
})
export class TeacherModule {
}
