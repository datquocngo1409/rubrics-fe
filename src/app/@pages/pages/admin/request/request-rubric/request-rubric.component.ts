import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {API} from '../../../../../services/apis-call/api.service';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'gts-fe-request-rubric',
  templateUrl: './request-rubric.component.html',
  styleUrls: ['./request-rubric.component.scss']
})
export class RequestRubricComponent implements OnInit {

  displayedColumns = ['id', 'name', 'user', 'created', 'edit'];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, {}) sort: MatSort;

  rubrics;
  data = [];

  constructor(
      private api: API,
      private router: Router
  ) {
  }

  ngOnInit(): void {
    this.data = [];
    this.api.getAllRequestRubric().subscribe(rubrics => {
      this.rubrics = rubrics;
      for (const rubric of this.rubrics) {
        const d = {
          id: rubric.id,
          name: rubric.name,
          created: rubric.created,
          rubricId: rubric.id,
          requestUser: rubric.requestUser
        };
        this.data.push(d);
      }
      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.paginator = this.paginator;
    });
  }

  newItem() {
    this.router.navigate(['/admin/request-rubric/new']);
  }

  edit(userId: any) {
    this.router.navigate(['/admin/request-rubric/' + userId]);
  }

}
