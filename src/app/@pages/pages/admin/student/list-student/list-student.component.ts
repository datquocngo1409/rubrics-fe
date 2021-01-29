import {Component, OnInit, ViewChild} from '@angular/core';
import {API} from '../../../../../services/apis-call/api.service';
import {TranslateService} from '@ngx-translate/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
    selector: 'gts-fe-list-student',
    templateUrl: './list-student.component.html',
    styleUrls: ['./list-student.component.scss']
})
export class ListStudentComponent implements OnInit {

    displayedColumns = ['id', 'code', 'name', 'username', 'age', 'address', 'email', 'phone', 'edit'];
    dataSource;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort, {}) sort: MatSort;

    students;
    data = [];


    constructor(
        private api: API,
        private router: Router
    ) {
    }

    ngOnInit(): void {
      this.getData()
    }

    getData() {
        this.data = [];
        this.api.getAllStudent().subscribe(students => {
            this.students = students;
            for (const student of this.students) {
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

    newItem() {
        this.router.navigate(['/admin/student/new']);
    }

    edit(userId: any) {
        this.router.navigate(['/admin/student/' + userId]);
    }
}
