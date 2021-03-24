import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {API} from '../../../../../../services/apis-call/api.service';

@Component({
    selector: 'gts-fe-admin-statistical-detail-teacher',
    templateUrl: './admin-statistical-detail-teacher.component.html',
    styleUrls: ['./admin-statistical-detail-teacher.component.scss']
})
export class AdminStatisticalDetailTeacherComponent implements OnInit {

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
    chart3Data = {
        series: [],
        chart: {
            type: 'polarArea',
            height: 350
        },
        label: [],
        stroke: {
            colors: ['#fff']
        },
        fill: {
            opacity: 0.8
        },
        responsive: [
            {
                breakpoint: 200,
                options: {
                    chart: {
                        width: 100
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        ]
    };
    chart4Data = this.chart1Data;

    teacher;
    subjectAll;
    subjectHaveTeacher;
    ratings;
    ratingHaveTeacher;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private api: API
    ) {
    }

    ngOnInit(): void {
        this.subjectHaveTeacher = [];
        this.ratingHaveTeacher = [];
        const id = this.route.snapshot.paramMap.get('id');
        this.api.getTeacherById(id).subscribe(teacher => {
            this.teacher = teacher;
            const subjectHaveTeacherId = [];
            const subjectHaveTeacherName = [];
            const subjectHaveTeacherStudentCount = [];
            const data2 = [];
            this.api.getAllSubject().subscribe(subjects => {
                this.subjectAll = subjects;
                for (const subject of this.subjectAll) {
                    if (subject.teacherId == id) {
                        this.subjectHaveTeacher.push(subject);
                        subjectHaveTeacherId.push(subject.code);
                        subjectHaveTeacherName.push(subject.name);
                        subjectHaveTeacherStudentCount.push(subject.students.length);
                        data2.push({
                            x: subject.code,
                            y: [
                                new Date(subject.startDate).getTime(),
                                new Date(subject.startDate).getTime() + 15 * 7 * 24 * 60 * 60 * 1000
                            ]
                        });
                    }
                }
                // chart 1
                const series1 = [
                    {
                        name: 'Number of Students',
                        data: subjectHaveTeacherStudentCount
                    }
                ];
                const xaxis1 = {
                    categories: subjectHaveTeacherId
                };
                this.chart1Data = {
                    ...this.chart1Data, ...{
                        xaxis: xaxis1,
                        series: series1
                    }
                };
                // chart 2
                const series2 = [
                    {
                        name: '',
                        data: data2
                    }
                ];
                this.chart2Data = {
                    ...this.chart2Data, ...{
                        series: series2
                    }
                };

                // chart 3, 4
                this.api.getAllRating().subscribe(ratings => {
                    this.ratings = ratings;
                    const name = [];
                    const point = [];
                    const count = [];
                    for (const r of this.ratings) {
                        if (subjectHaveTeacherName.indexOf(r.subjectName) >= 0) {
                            this.ratingHaveTeacher.push(r);
                            name.push(r.subjectName);
                            point.push(r.point);
                            count.push(r.count);
                        }
                    }
                    this.chart3Data = {
                        ...this.chart3Data, ...{
                            series: point,
                            label: name
                        }
                    };

                    const series4 = [
                        {
                            name: 'Number of Rating',
                            data: count
                        }
                    ];
                    const xaxis4 = {
                        categories: subjectHaveTeacherId
                    };
                    this.chart4Data = {
                        ...this.chart4Data, ...{
                            xaxis: xaxis4,
                            series: series4
                        }
                    };
                });
            });
        });
    }
}
