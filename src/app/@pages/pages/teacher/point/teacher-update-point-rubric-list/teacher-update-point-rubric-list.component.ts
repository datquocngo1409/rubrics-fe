import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {API} from '../../../../../services/apis-call/api.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'gts-fe-teacher-update-point-rubric-list',
  templateUrl: './teacher-update-point-rubric-list.component.html',
  styleUrls: ['./teacher-update-point-rubric-list.component.scss']
})
export class TeacherUpdatePointRubricListComponent implements OnInit {

  id;
  subject;
  subjectRubricImportants;
  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private api: API,
      public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.api.getSubjectById(this.id).subscribe(subject => {
      this.subject = subject;
      this.api.getRubricImportantsSubject(this.id).subscribe(subjectRubricImportant => {
        this.subjectRubricImportants = subjectRubricImportant;
        for (let i = 0; i < this.subjectRubricImportants.length; i++) {
          this.subjectRubricImportants.sort(
              (a, b) => (a.rubricName > b.rubricName ? -1 : 1)
          );
        }
      });
    })
  }

  goToGivePoint(rubricImportant) {
    this.router.navigate(['/teacher/subject/' + this.id + '/point/filterRubric/' + rubricImportant.rubricId]);
  }
}
