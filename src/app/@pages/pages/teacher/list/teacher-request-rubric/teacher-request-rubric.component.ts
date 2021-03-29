import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {API} from '../../../../../services/apis-call/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'gts-fe-teacher-request-rubric',
    templateUrl: './teacher-request-rubric.component.html',
    styleUrls: ['./teacher-request-rubric.component.scss']
})
export class TeacherRequestRubricComponent implements OnInit {
    ACTION;
    formGroup: FormGroup;
    rubric;
    id;
    user;

    constructor(
        private api: API,
        private route: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder,
        private toastr: ToastrService,
    ) {
    }

    ngOnInit(): void {
        this.user = JSON.parse(localStorage.getItem('userProfile'));
        this.id = this.route.snapshot.paramMap.get('id');
        this.ACTION = 'NEW';
        this.formGroup = this.formBuilder.group({
            name: ['', Validators.required]
        });
    }

    onSubmit() {
        this.formGroup.patchValue({requestUser: this.user.name});
        this.api.createRequestRubric(this.formGroup.value).subscribe(next => {
            this.toastr.success('Sent request to Admin successfully!');
            this.formGroup.patchValue({name: ''});
            this.router.navigate(['teacher/request-rubric']);
        });
    }

    onCancel() {
        this.router.navigate(['teacher/subject/list']);
    }

}
