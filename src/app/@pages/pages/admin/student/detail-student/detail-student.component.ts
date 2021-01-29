import {Component, OnInit} from '@angular/core';
import {API} from '../../../../../services/apis-call/api.service';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'gts-fe-detail-student',
    templateUrl: './detail-student.component.html',
    styleUrls: ['./detail-student.component.scss']
})
export class DetailStudentComponent implements OnInit {

    ACTION;
    formGroup: FormGroup;
    user;
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
                username: ['', [Validators.required]],
                password: ['', [Validators.required]],
                name: ['', Validators.required],
                role: ['STUDENT']
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
        this.api.getStudentById(this.id).subscribe(user => {
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
                this.router.navigate(['admin/student']);
            })
        } else {
            this.formGroup.controls.username.enable();
            this.formGroup.controls.code.enable();
            this.formGroup.controls.password.enable();
            this.api.updateStudent(this.id, this.formGroup.value).subscribe(next => {
                this.router.navigate(['admin/student']);
            })
        }
    }

    onCancel() {
        this.router.navigate(['admin/student']);
    }
}
