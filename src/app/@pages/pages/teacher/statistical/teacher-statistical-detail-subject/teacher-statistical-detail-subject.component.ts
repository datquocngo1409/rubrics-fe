import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {API} from '../../../../../services/apis-call/api.service';
import {MatDialog} from '@angular/material/dialog';
import {TeacherPointDialogComponent} from '../../point/dialog/teacher-point-dialog/teacher-point-dialog.component';

@Component({
    selector: 'gts-fe-teacher-statistical-detail-subject',
    templateUrl: './teacher-statistical-detail-subject.component.html',
    styleUrls: ['./teacher-statistical-detail-subject.component.scss']
})
export class TeacherStatisticalDetailSubjectComponent implements OnInit {

    @ViewChild('pdf') pdf: ElementRef;

    chart1Data = {
        series: [
            {
                name: 'Score',
                data: []
            }
        ],
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
                horizontal: true
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: []
        },
        config: {
            ticks: {
                autoSkip: false
            }
        }
    };
    chart2Data = {
        series: [
            {
                name: 'Score',
                data: []
            }
        ],
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
                horizontal: true
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: []
        },
        config: {
            ticks: {
                autoSkip: false
            }
        }
    };
    chart4Data = {
        series: [0, 0],
        chart: {
            width: 450,
            type: 'pie'
        },
        labels: ['Student Passed', 'Student Failed'],
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        ]
    };
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
    visibleIndex = -1;

    public chart3Data = [];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private api: API,
        public dialog: MatDialog
    ) {
    }

    ngOnInit(): void {
        this.visibleIndex = -1;
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

                const xaxis = {
                    categories: []
                };
                const series = [
                    {
                        name: 'Score',
                        data: []
                    }
                ];
                const xaxis2 = {
                    categories: []
                };
                const series2 = [
                    {
                        name: 'Score',
                        data: []
                    }
                ];
                const point2 = [];
                const chart3 = [];
                let studentPassCount = 0;
                let studentFailCount = 0;
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
                    // chart 1
                    xaxis.categories.push(d.name);
                    series[0].data.push(d.totalPoint / 2);

                    // chart 3
                    let min = 5, max = 0;

                    // chart 4
                    if (d.totalPoint >= 4) {
                        studentPassCount++;
                    } else {
                        studentFailCount++;
                    }
                    for (const srp of sp.studentRubricPointDtoList) {
                        const point = {
                            point: srp.point,
                            rubricImportantId: srp.rubricImportantId,
                            rubricImportantImportant: srp.rubricImportantImportant,
                            rubricImportantName: srp.rubricImportantName
                        };
                        let point2Have = false;
                        for (const p2 of point2) {
                            if (p2.rubricImportantId === point.rubricImportantId) {
                                p2.totalPoint = p2.totalPoint + point.point;
                                p2.count++;
                                point2Have = true;
                            }
                        }
                        if (!point2Have) {
                            point2.push({
                                rubricImportantId: point.rubricImportantId,
                                name: point.rubricImportantName,
                                totalPoint: point.point,
                                count: 1
                            });
                        }
                        if (srp.point / 2 > max) {
                            max = srp.point / 2;
                        }
                        if (srp.point / 2 < min) {
                            min = srp.point / 2;
                        }
                        d.points.push(point);
                    }
                    chart3.push({
                        month: d.name,
                        min: min,
                        max: max
                    });
                    this.dataSource.push(d);
                }
                for (const p2 of point2) {
                    xaxis2.categories.push(p2.name);
                    series2[0].data.push(p2.totalPoint / p2.count / 2);
                }
                this.dataSource.sort(
                    (a, b) => {
                        const aData = a.name.split(' ');
                        const bData = b.name.split(' ');
                        const aLastName = aData[aData.length - 1];
                        const bLastName = bData[bData.length - 1];
                        return aLastName.localeCompare(bLastName);
                    }
                );
                this.chart1Data = {
                    ...this.chart1Data, ...{
                        xaxis: xaxis,
                        series: series
                    }
                };
                this.chart2Data = {
                    ...this.chart2Data, ...{
                        xaxis: xaxis2,
                        series: series2
                    }
                };
                this.chart3Data = {
                    ...this.chart3Data, ...chart3
                };
                this.chart4Data = {
                    ...this.chart4Data, ...{
                        series: [studentPassCount, studentFailCount]
                    }
                };
                console.log(this.dataSource);
            }
        });
    }

    public labelContent(e: any): string {
        return `${e.dataItem.time.substring(0, 2)}h`;
    }

    public labelContentFrom(e: any): string {
        return `${e.value.from}`;
    }

    public labelContentTo(e: any): string {
        return `${e.value.to}`;
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
        if (point === 0) {
            return 'F';
        } else if (point <= 2) {
            return 'D';
        } else if (point <= 4) {
            return 'C';
        } else if (point <= 6) {
            return 'B';
        } else if (point <= 8) {
            return 'A';
        } else if (point <= 10) {
            return 'A+';
        }
    }

    getPointTextTitle(point: any) {
        if (point === 0) {
            return 'Chưa hoàn thành';
        } else if (point <= 2) {
            return 'Hoàn thành, còn mắc nhiều lỗi';
        } else if (point <= 4) {
            return 'Hoàn thành, còn mắc vài lỗi';
        } else if (point <= 6) {
            return 'Hoàn thành, đúng hạn';
        } else if (point <= 8) {
            return 'Hoàn thành tốt, đúng hạn, chất lượng ổn';
        } else if (point <= 10) {
            return 'Hoàn thành xuất sắc, đúng hạn, chất lượng tốt';
        }
    }

    getPointClass(point: any) {
        if (point === 0) {
            return 'pointF';
        } else if (point <= 2) {
            return 'pointD';
        } else if (point <= 4) {
            return 'pointC';
        } else if (point <= 6) {
            return 'pointB';
        } else if (point <= 8) {
            return 'pointA';
        } else if (point <= 10) {
            return 'pointAPlus';
        }
    }

    showSubItem(ind) {
        if (this.visibleIndex === ind) {
            this.visibleIndex = -1;
        } else {
            this.visibleIndex = ind;
        }
    }

    getText(ps: number) {
        if (ps <= 0) {
            return 'Chưa hoàn thành';
        } else if (ps <= 2) {
            return 'Hoàn thành, còn mắc nhiều lỗi';
        } else if (ps <= 4) {
            return 'Hoàn thành, còn mắc vài lỗi';
        } else if (ps <= 6) {
            return 'Hoàn thành, đúng hạn';
        } else if (ps <= 8) {
            return 'Hoàn thành tốt, đúng hạn, chất lượng ổn';
        } else if (ps <= 10) {
            return 'Hoàn thành xuất sắc, đúng hạn, chất lượng tốt';
        }
    }
}
