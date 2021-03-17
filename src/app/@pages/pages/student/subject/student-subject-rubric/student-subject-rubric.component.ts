import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {API} from '../../../../../services/apis-call/api.service';

@Component({
    selector: 'gts-fe-student-subject-rubric',
    templateUrl: './student-subject-rubric.component.html',
    styleUrls: ['./student-subject-rubric.component.scss']
})
export class StudentSubjectRubricComponent implements OnInit {

    subject;
    rubrics;
    total;

    constructor(
        private route: ActivatedRoute,
        private api: API
    ) {
    }

    ngOnInit(): void {
        this.total = 0;
        const id = +this.route.snapshot.paramMap.get('id');
        this.api.getSubjectById(id).subscribe(subject => {
            this.subject = subject;
            this.api.getRubricImportantsSubject(id).subscribe(subjectRubricImportant => {
                this.rubrics = subjectRubricImportant;
                for (const rubric of this.rubrics) {
                    this.total += rubric.important;
                }
            });
        });
    }

    calculateWeek(startDate) {
        if (startDate !== null) {
            const data = startDate.split('-');
            const startDateDate = new Date();
            startDateDate.setDate(data[2]);
            startDateDate.setMonth(data[1] - 1);
            startDateDate.setFullYear(data[0]);
            const now = new Date();
            const seconds = (now.getTime() - startDateDate.getTime()) / 1000;
            return Math.floor(seconds / (60 * 60 * 24 * 7));
        }
    }
}
