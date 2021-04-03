import {Component, OnInit} from '@angular/core';
import {PageTitleService} from '../../core/page-title/page-title.service';
import * as introJs from 'intro.js/intro.js';
import {RatingDialogComponent} from '../../@pages/pages/student/subject/rating-dialog/rating-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {TutorialComponent} from '../../@pages/pages/tutorial-dialog/tutorial/tutorial.component';

@Component({
    selector: 'ms-crm',
    templateUrl: './crm.component.html',
    styleUrls: ['./crm.component.scss']
})

export class CrmComponent implements OnInit {
    introJS = introJs();
    user;
    dialogRef;
    constructor(
        private pageTitleService: PageTitleService,
        private dialog: MatDialog,
        ) {
    }

    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('userProfile'));
    }

    startTutorial() {
        this.dialogRef = this.dialog.open(TutorialComponent, {
            width: '1000px',
            height: '600px',
            data: {
                user: this.user
            }
        });
    }
}
