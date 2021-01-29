import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {API} from '../../../../../services/apis-call/api.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'gts-fe-detail-rubric',
  templateUrl: './detail-rubric.component.html',
  styleUrls: ['./detail-rubric.component.scss']
})
export class DetailRubricComponent implements OnInit {
  ACTION;
  formGroup: FormGroup;
  rubric;
  id;

  constructor(
      private api: API,
      private route: ActivatedRoute,
      private router: Router,
      private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id === 'new') {
      this.ACTION = 'NEW';
      this.formGroup = this.formBuilder.group({
        name: ['', Validators.required]
      });
    } else {
      this.ACTION = 'EDIT';
      this.formGroup = this.formBuilder.group({
        id: [0],
        name: ['', Validators.required]
      });
      this.loadEdit();
    }
  }

  private loadEdit() {
    this.api.getRubricById(this.id).subscribe(rubric => {
      this.rubric = rubric;
      this.formGroup.patchValue(this.rubric);
    })
  }

  onSubmit() {
    if (this.ACTION === 'NEW') {
      this.api.createRubric(this.formGroup.value).subscribe(next => {
        this.router.navigate(['admin/rubric']);
      })
    } else {
      this.api.updateRubric(this.id, this.formGroup.value).subscribe(next => {
        this.router.navigate(['admin/rubric/']);
      })
    }
  }

    onCancel() {
      this.router.navigate(['admin/rubric/']);
    }
}
