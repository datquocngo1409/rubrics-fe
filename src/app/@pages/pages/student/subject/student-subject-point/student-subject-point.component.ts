import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {API} from '../../../../../services/apis-call/api.service';
import {MatDialog} from '@angular/material/dialog';
import {TeacherPointDialogComponent} from '../../../teacher/point/dialog/teacher-point-dialog/teacher-point-dialog.component';

@Component({
  selector: 'gts-fe-student-subject-point',
  templateUrl: './student-subject-point.component.html',
  styleUrls: ['./student-subject-point.component.scss']
})
export class StudentSubjectPointComponent implements OnInit {

  @ViewChild('pdf') pdf: ElementRef;

  displayedColumns: string[] = ['id', 'code', 'name'];
  dataSource = [];
  id;
  subject;
  data;
  studentPoints;
  isNoData = false;
  rubrics = [];
  rubricNames = [];
  totalImportant = 0;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private api: API,
      public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.api.getDataSubject(this.id).subscribe(data => {
      this.data = data;
      this.subject = this.data.classroomDto;
      this.studentPoints = this.data.studentTotalRubricPointDtos;
      if (this.studentPoints.length === 0) {
        this.isNoData = true;
      } else {
        for (let i = 0; i < this.studentPoints.length; i++) {
          this.studentPoints[i].studentRubricPointDtoList.sort(
              (a, b) => (a.rubricImportantImportant > b.rubricImportantImportant ? -1 : 1)
          );
        }
        for (const object of this.studentPoints[0].studentRubricPointDtoList) {
          this.totalImportant += object.rubricImportantImportant;
        }
        for (let i = 0; i < this.studentPoints[0].studentRubricPointDtoList.length; i++) {
          const rubric = this.studentPoints[0].studentRubricPointDtoList[i];
          this.rubricNames.push(rubric.rubricImportantName
              + '\n [' + ((100 * rubric.rubricImportantImportant / this.totalImportant).toFixed(2)) + '%]');
          this.displayedColumns.push('rubric' + i);
          this.rubrics.push('rubric' + i);
        }
        this.displayedColumns.push('totalPoint');
        this.displayedColumns.push('gpaPoint');
        this.displayedColumns.push('totalPointString');
        this.displayedColumns.push('passed');
        this.displayedColumns.push('option');

        for (const sp of this.studentPoints) {
          const d = {
            id: sp.studentId,
            code: sp.studentRubricPointDtoList[0].studentCode,
            name: sp.studentRubricPointDtoList[0].studentName,
            points: [],
            gpaPoint: sp.gpaPoint,
            totalPoint: sp.totalPoint,
            passed: sp.passed,
            totalPointString: sp.totalPointString
          };
          for (const srp of sp.studentRubricPointDtoList) {
            const point = {
              point: srp.point,
              rubricImportantId: srp.rubricImportantId,
              rubricImportantImportant: srp.rubricImportantImportant,
              rubricImportantName: srp.rubricImportantName
            };
            d.points.push(point);
          }
          this.dataSource.push(d);
        }
        this.dataSource.sort(
            (a, b) => {
              const aData = a.name.split(' ');
              const bData = b.name.split(' ');
              const aLastName = aData[aData.length - 1];
              const bLastName = bData[bData.length - 1];
              return aLastName.localeCompare(bLastName)
            }
        );
      }
    });
  }

  view(id) {
    this.dialog.open(TeacherPointDialogComponent, {
      data: { classId: this.id, studentId: id },
    });
  }

  updatePoint(id) {
    this.router.navigate(['/teacher/subject/detail/' + this.id + '/' + id + '/edit']);
  }

  addRubrics() {
    this.router.navigate(['/teacher/subject/add-rubric/' + this.id]);
  }

  updatePoints() {

  }

  exportPDF() {

  }

  exportExcel() {

  }
}
