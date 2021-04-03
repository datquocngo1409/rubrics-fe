import {Component, OnInit} from '@angular/core';
import {API} from '../../../../../services/apis-call/api.service';

@Component({
    selector: 'gts-fe-your-point',
    templateUrl: './your-point.component.html',
    styleUrls: ['./your-point.component.scss']
})
export class YourPointComponent implements OnInit {

    transcripDatas;
    studentData;
    user;
    userData = [];
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
                vertical: true
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
                data: [
                    {
                        x: 'Code',
                        y: [
                            new Date('2019-03-02').getTime(),
                            new Date('2019-03-04').getTime()
                        ]
                    },
                    {
                        x: 'Test',
                        y: [
                            new Date('2019-03-04').getTime(),
                            new Date('2019-03-08').getTime()
                        ]
                    },
                    {
                        x: 'Validation',
                        y: [
                            new Date('2019-03-08').getTime(),
                            new Date('2019-03-12').getTime()
                        ]
                    },
                    {
                        x: 'Deployment',
                        y: [
                            new Date('2019-03-12').getTime(),
                            new Date('2019-03-18').getTime()
                        ]
                    }
                ]
            }
        ],
        chart: {
            height: 350,
            type: 'rangeBar'
        },
        plotOptions: {
            bar: {
                horizontal: true
            }
        },
        xaxis: {
            type: 'datetime'
        }
    };
    dataSource = [];
    displayedColumns = ['id', 'classroomCode', 'classroomName', 'point', 'pointString'];

    constructor(
        private api: API
    ) {
    }

    ngOnInit(): void {
        this.userData = [];
        this.user = JSON.parse(localStorage.getItem('userProfile'));
        this.api.getAllTranscripData().subscribe(transcripDatas => {
            this.transcripDatas = transcripDatas;
            for (const data of this.transcripDatas) {
                for (const d of data.studentTotalRubricPointDtoList) {
                    if (d.studentRubricPointDtoList.length > 0 && d.studentRubricPointDtoList[0].studentId === this.user.id) {
                        this.userData.push({
                            user: this.user,
                            point: d.totalPoint,
                            classroom: data.classroomDto,
                            pointString: d.totalPointString,
                            gpaPoint: d.gpaPoint
                        });
                    }
                }
            }
            const pointList = [];
            const subjectNameList = [];
            const startDateList = [];
            const source = [];

            for (const data of this.userData) {
                pointList.push(data.point.toFixed(2));
                subjectNameList.push(data.classroom.code);
                startDateList.push({
                    x: data.classroom.code,
                    y: [
                        new Date(data.classroom.startDate).getTime(),
                        new Date(data.classroom.startDate).getTime() + 15 * 7 * 24 * 60 * 60 * 1000
                    ]
                });
                source.push({
                    classroomCode: data.classroom.code,
                    classroomName: data.classroom.name,
                    point: data.point.toFixed(2),
                    pointString: data.pointString,
                    gpaPoint: data.gpaPoint
                });
            }

            this.dataSource = source;
            // chart 1
            const series1 = [
                {
                    name: 'Point of Subjects',
                    data: pointList
                }
            ];
            const xaxis1 = {
                categories: subjectNameList
            };
            this.chart1Data = {
                ...this.chart1Data, ...{
                    xaxis: xaxis1,
                    series: series1
                }
            };

            // chart 2
            // chart 2
            const series2 = [
                {
                    name: '',
                    data: startDateList
                }
            ];
            this.chart2Data = {
                ...this.chart2Data, ...{
                    series: series2
                }
            };
        });
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
