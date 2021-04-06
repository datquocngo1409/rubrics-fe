import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {API} from '../../../../../services/apis-call/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import {TeacherPointDialogComponent} from '../dialog/teacher-point-dialog/teacher-point-dialog.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
    selector: 'gts-fe-teacher-point-subject',
    templateUrl: './teacher-point-subject.component.html',
    styleUrls: ['./teacher-point-subject.component.scss']
})
export class TeacherPointSubjectComponent implements OnInit {

    @ViewChild('pdf') pdf: ElementRef;
    @ViewChild(MatSort) sort: MatSort;

    displayedColumns: string[] = ['id', 'code', 'name'];
    dataSource = new MatTableDataSource();
    dataSourceData = [];
    id;
    subject;
    data;
    studentPoints;
    isNoData = false;
    rubrics = [];
    rubricNames = [];
    totalImportant = 0;
    searchText;

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
                        (a, b) => (a.rubricImportantName > b.rubricImportantName ? -1 : 1)
                    );
                }
                for (const object of this.studentPoints[0].studentRubricPointDtoList) {
                    this.totalImportant += object.rubricImportantImportant;
                }
                for (let i = 0; i < this.studentPoints[0].studentRubricPointDtoList.length; i++) {
                    const rubric = this.studentPoints[0].studentRubricPointDtoList[i];
                    this.rubricNames.push(rubric.rubricImportantName);
                    // + ' [' + ((100 * rubric.rubricImportantImportant / this.totalImportant).toFixed(2)) + '%]');
                    this.displayedColumns.push('rubric' + i);
                    this.rubrics.push('rubric' + i);
                }
                // this.displayedColumns.push('totalPoint');
                // this.displayedColumns.push('passed');
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
                    this.dataSourceData.push(d);
                }
                this.dataSourceData.sort(
                    (a, b) => {
                        const aData = a.name.split(' ');
                        const bData = b.name.split(' ');
                        const aLastName = aData[aData.length - 1];
                        const bLastName = bData[bData.length - 1];
                        return aLastName.localeCompare(bLastName);
                    }
                );
                this.dataSource = new MatTableDataSource(this.dataSourceData);
            }
        });
    }

    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
    }

    view(id) {
        this.dialog.open(TeacherPointDialogComponent, {
            data: {classId: this.id, studentId: id},
        });
    }

    updatePoint(id) {
        this.router.navigate(['/teacher/subject/detail/' + this.id + '/' + id + '/edit']);
    }

    addRubrics() {
        this.router.navigate(['/teacher/subject/add-rubric/' + this.id]);
    }

    updatePoints() {
        this.router.navigate(['/teacher/subject/update-point/rubric/' + this.id]);
    }

    exportPDF() {

    }

    exportExcel() {

    }

    getPointText(point: any) {
        if (point <= 0) {
            return 'F';
        } else if (point <= 2) {
            return 'F';
        } else if (point <= 4) {
            return 'D';
        } else if (point <= 6) {
            return 'C';
        } else if (point <= 8) {
            return 'B';
        } else if (point <= 9) {
            return 'A';
        } else if (point <= 10) {
            return 'A+';
        }
    }

    getPointTextTitle(point: any) {
        if (point <= 0) {
            return 'Chưa hoàn thành';
        } else if (point <= 2) {
            return 'Chưa hoàn thành';
        } else if (point <= 4) {
            return 'Hoàn thành, còn mắc nhiều lỗi';
        } else if (point <= 6) {
            return 'Hoàn thành, còn mắc vài lỗi';
        } else if (point <= 8) {
            return 'Hoàn thành, đúng hạ';
        } else if (point <= 9) {
            return 'Hoàn thành tốt, đúng hạn, chất lượng ổn';
        } else if (point <= 10) {
            return 'Hoàn thành xuất sắc, đúng hạn, chất lượng tốt';
        }
    }

    getPointClass(point: any) {
        if (point <= 0) {
            return 'pointF';
        } else if (point <= 2) {
            return 'pointF';
        } else if (point <= 4) {
            return 'pointD';
        } else if (point <= 6) {
            return 'pointC';
        } else if (point <= 8) {
            return 'pointB';
        } else if (point <= 9) {
            return 'pointA';
        } else if (point <= 10) {
            return 'pointAPlus';
        }
    }
}
