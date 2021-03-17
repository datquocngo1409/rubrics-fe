import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {API} from '../../../../../services/apis-call/api.service';
import {
    ApexAxisChartSeries,
    ApexChart,
    ChartComponent,
    ApexDataLabels,
    ApexXAxis,
    ApexPlotOptions
} from 'ng-apexcharts';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {RatingDialogComponent} from '../rating-dialog/rating-dialog.component';

export interface ChartOptions {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    xaxis: ApexXAxis;
}

@Component({
    selector: 'gts-fe-student-subject-rate',
    templateUrl: './student-subject-rate.component.html',
    styleUrls: ['./student-subject-rate.component.scss']
})
export class StudentSubjectRateComponent implements OnInit {

    @ViewChild('chart') chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    subject;
    nowRate;
    ratings;
    dialogRef;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private api: API,
        private dialog: MatDialog,
    ) {
    }

    ngOnInit(): void {
        this.chartOptions = {
            series: [
                {
                    name: 'basic',
                    data: [1380, 1200, 1100, 690, 580, 540, 470, 448, 430, 400]
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
                categories: [
                    '90 - 100',
                    '80 - 90',
                    '70 - 80',
                    '60 - 70',
                    '50 - 60',
                    '40 - 50',
                    '30 - 40',
                    '20 - 30',
                    '10 - 20',
                    '0 - 10',
                ]
            }
        };
        const id = +this.route.snapshot.paramMap.get('id');
        this.api.getSubjectById(id).subscribe(subject => {
            this.subject = subject;
            this.api.getSubjectRating(id).subscribe(nowRate => {
                this.nowRate = nowRate;
                this.api.getAllRatingBySubject(id).subscribe(ratings => {
                    this.ratings = ratings;
                });
            });
        });
    }

    calculateWeek(startDate) {
        if (startDate !== null) {
            const data = startDate.split('-');
            const startDateDate = new Date();
            startDateDate.setDate(data[2]);
            startDateDate.setMonth(data[1] - 1);
            startDateDate.setFullYear(data[0]);
            const now = new Date();
            const seconds = (now.getTime() - startDateDate.getTime()) / 1000;
            return Math.floor(seconds / (60 * 60 * 24 * 7));
        }
    }

    rate(id) {
        this.dialogRef = this.dialog.open(RatingDialogComponent, {
            width: '1000px',
            height: '600px',
            data: {
                subject: this.subject
            }
        });
    }
}
