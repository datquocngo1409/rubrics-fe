import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {API} from '../../../../../services/apis-call/api.service';

@Component({
  selector: 'gts-fe-detail-teacher',
  templateUrl: './detail-teacher.component.html',
  styleUrls: ['./detail-teacher.component.scss']
})
export class DetailTeacherComponent implements OnInit {
  ACTION;
  formGroup: FormGroup;
  id;
  user;
  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private formBuilder: FormBuilder,
      private api: API
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id;
    if (id === 'new') {
      this.ACTION = 'NEW';
      this.formGroup = this.formBuilder.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
        name: ['', Validators.required],
        role: ['TEACHER']
      });
    } else {
      this.ACTION = 'EDIT';
      this.formGroup = this.formBuilder.group({
        id: [0],
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
        code: [0, Validators.required],
        name: ['', Validators.required],
        age: [18],
        phone: ['', [Validators.minLength(10), Validators.maxLength(10)]],
        email: ['', Validators.email],
        address: [''],
        avatar: [''],
        token: [''],
        role: ['']
      });
      this.loadEdit();
    }
  }

  private loadEdit() {
    this.api.getTeacherById(this.id).subscribe(user => {
      this.user = user;
      this.formGroup.patchValue(this.user);
      this.formGroup.controls.username.disable();
      this.formGroup.controls.code.disable();
      this.formGroup.controls.password.disable();
    })
  }

  onSubmit() {
    if (this.ACTION === 'NEW') {
      this.api.signup(this.formGroup.value).subscribe(next => {
        this.router.navigate(['admin/teacher']);
      })
    } else {
      this.formGroup.controls.username.enable();
      this.formGroup.controls.code.enable();
      this.formGroup.controls.password.enable();
      this.api.updateTeacher(this.id, this.formGroup.value).subscribe(next => {
        this.router.navigate(['admin/teacher']);
      })
    }
  }

    onCancel() {
      this.router.navigate(['admin/teacher']);
    }
}
