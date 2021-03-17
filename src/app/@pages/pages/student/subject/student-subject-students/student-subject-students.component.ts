import {Component, OnInit, ViewChild} from '@angular/core';
import {API} from '../../../../../services/apis-call/api.service';
import {ActivatedRoute} from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
    selector: 'gts-fe-student-subject-students',
    templateUrl: './student-subject-students.component.html',
    styleUrls: ['./student-subject-students.component.scss']
})
export class StudentSubjectStudentsComponent implements OnInit {

    displayedColumns = ['id', 'code', 'name', 'username', 'age', 'address', 'email', 'phone'];
    dataSource;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort, {}) sort: MatSort;
    subject;
    data;

    constructor(
        private api: API,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this.data = [];
        const id = +this.route.snapshot.paramMap.get('id');
        this.api.getSubjectById(id).subscribe(subject => {
            this.subject = subject;
            for (const student of this.subject.students) {
                const d = {
                    id: student.id,
                    name: student.name,
                    code: student.code,
                    username: student.username,
                    age: student.age,
                    address: student.address,
                    email: student.email,
                    phone: student.phone,
                    userId: student.id
                };
                this.data.push(d);
            }
            this.dataSource = new MatTableDataSource(this.data);
            this.dataSource.paginator = this.paginator;
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

    getStarLength(address) {
        let result = '';
        if (address === null || address === undefined) {
            return '';
        }
        if (address.indexOf('@') >= 0) {
            const data = address.split('@');
            for (const d of data) {
                for (let i = 0; i < d.length; i++) {
                    result = result + '*';
                }
                result = result + '@';
            }
            result = result.substring(0, result.length - 1);
            return result;
        } else {
            for (let i = 0; i < address.length; i++) {
                result = result + '*';
            }
        }
        return result;
    }
}
