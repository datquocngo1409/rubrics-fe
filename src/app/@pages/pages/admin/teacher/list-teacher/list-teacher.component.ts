import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {TranslateService} from '@ngx-translate/core';
import {API} from '../../../../../services/apis-call/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'gts-fe-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.scss']
})
export class ListTeacherComponent implements OnInit {
  displayedColumns = ['id', 'name', 'username', 'age', 'address', 'email', 'phone', 'edit'];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, {}) sort: MatSort;
  teachers;
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
    this.router.navigate(['/admin/teacher/' + id]);
  }

  getData() {
    this.data = [];
    this.api.getAllTeacher().subscribe(teachers => {
      this.teachers = teachers;
      for (const teacher of this.teachers) {
        const d = {
          id: teacher.id,
          name: teacher.name,
          username: teacher.username,
          age: teacher.age,
          address: teacher.address,
          email: teacher.email,
          phone: teacher.phone,
          userId: teacher.id
        };
        this.data.push(d);
      }
      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.paginator = this.paginator;
    });
  }

  // delete(id: any) {
  //   this.api.deleteTeacher(id).subscribe(next => {
  //     this.getData();
  //   });
  // }

  newItem() {
    this.router.navigate(['/admin/teacher/new']);
  }
}
