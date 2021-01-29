import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'ms-doughnut',
    templateUrl: './doughnut.component.html',
    styleUrls: ['./doughnut.component.scss']
})
export class DoughnutComponent implements OnInit {
    // Doughnut
    public doughnutChartLabels;
    public demodoughnutChartData;
    public doughnutChartType;

    constructor() {
        this.doughnutChartLabels = ['Age 18 to 24', 'Age 25 to 35', 'Above 35+'];
        this.demodoughnutChartData = [[350, 450, 100], [250, 350, 150]];
        this.doughnutChartType = 'doughnut';
    }

    ngOnInit(): void {
        this.doughnutChartLabels = ['Age 18 to 24', 'Age 25 to 35', 'Above 35+'];
        this.demodoughnutChartData = [[350, 450, 100], [250, 350, 150]];
        this.doughnutChartType = 'doughnut';
    }

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }
}
