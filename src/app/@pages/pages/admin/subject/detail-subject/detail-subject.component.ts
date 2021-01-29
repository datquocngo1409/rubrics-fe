import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {API} from '../../../../../services/apis-call/api.service';

@Component({
    selector: 'gts-fe-detail-subject',
    templateUrl: './detail-subject.component.html',
    styleUrls: ['./detail-subject.component.scss']
})
export class DetailSubjectComponent implements OnInit {
    ACTION;
    formGroup: FormGroup;
    id;
    subject;
    teacherId;
    teachers;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder,
        private api: API
    ) {
    }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.id = id;
        this.api.getAllTeacher().subscribe(teachers => {
            this.teachers = teachers;
            if (id === 'new') {
                this.ACTION = 'NEW';
                this.formGroup = this.formBuilder.group({
                    code: ['', [Validators.required]],
                    name: ['', [Validators.required]],
                    startDate: ['', Validators.required],
                    teacherId: [0]
                });
            } else {
                this.ACTION = 'EDIT';
                this.formGroup = this.formBuilder.group({
                    code: ['', [Validators.required]],
                    name: ['', [Validators.required]],
                    startDate: ['', Validators.required],
                    teacherName: [''],
                    teacherId: [0]
                });
                this.loadEdit();
            }
        });
    }

    private loadEdit() {
        this.api.getSubjectById(this.id).subscribe(subject => {
            this.subject = subject;
            this.formGroup.patchValue(this.subject);
            this.formGroup.controls.teacherName.disable();
            this.formGroup.controls.teacherId.disable();
        });
    }

    onSubmit() {
        if (this.ACTION === 'NEW') {
            this.api.createSubject(this.formGroup.value, this.teacherId).subscribe(next => {
                this.router.navigate(['admin/subject']);
            });
        } else {
            this.subject.name = this.formGroup.controls['name'].value;
            this.subject.code = this.formGroup.controls['code'].value;
            this.subject.startDate = this.formGroup.controls['startDate'].value;
            this.api.updateSubject(this.id, this.subject).subscribe(next => {
                this.router.navigate(['admin/subject']);
            });
        }
    }

    saveTeacherValue(value) {
        this.teacherId = value;
    }

    onCancel() {
        this.router.navigate(['admin/subject']);
    }
}
