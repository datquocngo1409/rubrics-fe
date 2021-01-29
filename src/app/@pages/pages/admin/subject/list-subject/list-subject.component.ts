import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {TranslateService} from '@ngx-translate/core';
import {API} from '../../../../../services/apis-call/api.service';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';

@Component({
    selector: 'gts-fe-list-subject',
    templateUrl: './list-subject.component.html',
    styleUrls: ['./list-subject.component.scss']
})
export class ListSubjectComponent implements OnInit {

    displayedColumns = ['id', 'code', 'name', 'teacher', 'startDate', 'endDate', 'studentCount', 'option'];
    dataSource;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort, {}) sort: MatSort;
    subjects;
    data = [];

    constructor(private translate: TranslateService, private api: API, private router: Router) {
    }

    ngOnInit(): void {
        this.getData();
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    onNavigate(productCode) {
        console.log(`product code ${productCode}`);
    }

    edit(id: any) {
        this.router.navigate(['/admin/subject/' + id]);
    }

    student(id: any) {
        this.router.navigate(['/admin/subject/' + id + '/student']);
    }

    rubric(id: any) {
        this.router.navigate(['/admin/subject/' + id + '/rubric']);
    }

    getData() {
        this.data = [];
        this.api.getAllSubject().subscribe(subjects => {
            this.subjects = subjects;
            for (const subject of this.subjects) {
                const d = {
                    id: subject.id,
                    name: subject.name,
                    code: subject.code,
                    startDate: subject.startDate,
                    teacher: subject.teacherName,
                    endDate: this.getEndDate(subject.startDate),
                    studentCount: subject.students.length,
                    subjectId: subject.id
                };
                this.data.push(d);
            }
            this.dataSource = new MatTableDataSource(this.data);
            this.dataSource.paginator = this.paginator;
        });
    }

    newItem() {
        this.router.navigate(['/admin/subject/new']);
    }

    getEndDate(startDate: any) {
        if (startDate !== null) {
            const data = startDate.split('-');
            const startDateDate = new Date();
            startDateDate.setDate(data[2]);
            startDateDate.setMonth(data[1] - 1);
            startDateDate.setFullYear(data[0]);
            const miliseconds = 15 * 7 * 24 * 3600 * 1000;
            const endDate = new Date(startDateDate.getTime() + miliseconds);
            return endDate.getFullYear() + '-' + this.to2Number((endDate.getMonth() + 1)) + '-' + this.to2Number(endDate.getDate());
        } else {
            return null;
        }
    }

    to2Number(value) {
        if (value >= 10) {
            return value.toString();
        } else {
            return '0' + value;
        }
    }
}
