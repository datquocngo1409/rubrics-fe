import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {API} from '../../../../../services/apis-call/api.service';
import {Router} from '@angular/router';

@Component({
    selector: 'gts-fe-list-rubric',
    templateUrl: './list-rubric.component.html',
    styleUrls: ['./list-rubric.component.scss']
})
export class ListRubricComponent implements OnInit {

    displayedColumns = ['id', 'name', 'edit'];
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
        this.api.getAllRubric().subscribe(rubrics => {
            this.rubrics = rubrics;
            for (const rubric of this.rubrics) {
                const d = {
                    id: rubric.id,
                    name: rubric.name,
                    rubricId: rubric.id
                };
                this.data.push(d);
            }
            this.dataSource = new MatTableDataSource(this.data);
            this.dataSource.paginator = this.paginator;
        });
    }

    newItem() {
        this.router.navigate(['/admin/rubric/new']);
    }

    edit(userId: any) {
        this.router.navigate(['/admin/rubric/' + userId]);
    }
}
