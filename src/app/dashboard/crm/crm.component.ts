import {Component, OnInit} from '@angular/core';
import {PageTitleService} from '../../core/page-title/page-title.service';
import * as introJs from 'intro.js/intro.js';

@Component({
    selector: 'ms-crm',
    templateUrl: './crm.component.html',
    styleUrls: ['./crm.component.scss']
})

export class CrmComponent implements OnInit {
    introJS = introJs();
    user;
    constructor(private pageTitleService: PageTitleService) {
    }

    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('userProfile'));
        this.pageTitleService.setTitle('CRM');
        if (this.user.role === 'STUDENT') {
            this.introJS.setOptions({
                steps: [
                    {
                        element: '#app-header',
                        intro: 'Our Website support you with your studies',
                        position: 'bottom'
                    },
                    {
                        element: '#developed-by',
                        intro: 'Developed By Ngô Quốc Đạt',
                        position: 'bottom'
                    },
                    {
                        element: '#stepHome',
                        intro: 'Click here to view Home Page',
                        position: 'bottom'
                    },
                    {
                        element: '#stepStudentSubject',
                        intro: 'Click here to view Subject',
                        position: 'bottom'
                    },
                    {
                        element: '#stepStudentStatistical',
                        intro: 'Click here to view Statistical',
                        position: 'bottom'
                    },
                    {
                        element: '#multi-language',
                        intro: 'Our Website supports multi-language, you could click here to choose your language',
                        position: 'left'
                    },
                    {
                        element: '#user-information',
                        intro: 'Click here to see your account information',
                        position: 'left'
                    },
                    {
                        element: '#app-infomation',
                        intro: 'This is my Website Infomation',
                        position: 'bottom'
                    },
                ],
                showProgress: true
            });
        } else if (this.user.role === 'TEACHER') {
            this.introJS.setOptions({
                steps: [
                    {
                        element: '#app-header',
                        intro: 'Our Website support you with your studies',
                        position: 'bottom'
                    },
                    {
                        element: '#developed-by',
                        intro: 'Developed By Ngô Quốc Đạt',
                        position: 'bottom'
                    },
                    {
                        element: '#stepHome',
                        intro: 'Click here to view Home Page',
                        position: 'bottom'
                    },
                    {
                        element: '#stepTeacherSubject',
                        intro: 'Click here to view Subject',
                        position: 'bottom'
                    },
                    {
                        element: '#stepTeacherStatistical',
                        intro: 'Click here to view Statistical',
                        position: 'bottom'
                    },
                    {
                        element: '#multi-language',
                        intro: 'Our Website supports multi-language, you could click here to choose your language',
                        position: 'left'
                    },
                    {
                        element: '#user-information',
                        intro: 'Click here to see your account information',
                        position: 'left'
                    },
                    {
                        element: '#app-infomation',
                        intro: 'This is my Website Infomation',
                        position: 'bottom'
                    },
                ],
                showProgress: true
            });
        } else if (this.user.role === 'ADMIN') {
            this.introJS.setOptions({
                steps: [
                    {
                        element: '#app-header',
                        intro: 'Our Website support you with your studies',
                        position: 'bottom'
                    },
                    {
                        element: '#developed-by',
                        intro: 'Developed By Ngô Quốc Đạt',
                        position: 'bottom'
                    },
                    {
                        element: '#stepHome',
                        intro: 'Click here to view Home Page',
                        position: 'bottom'
                    },
                    {
                        element: '#stepAdmin',
                        intro: 'Click here to view Admin',
                        position: 'bottom'
                    },
                    {
                        element: '#stepAdminStatistical',
                        intro: 'Click here to view Statistical',
                        position: 'bottom'
                    },
                    {
                        element: '#multi-language',
                        intro: 'Our Website supports multi-language, you could click here to choose your language',
                        position: 'left'
                    },
                    {
                        element: '#user-information',
                        intro: 'Click here to see your account information',
                        position: 'left'
                    },
                    {
                        element: '#app-infomation',
                        intro: 'This is my Website Infomation',
                        position: 'bottom'
                    },
                ],
                showProgress: true
            });
        }
    }

    startTutorial() {
        this.introJS.start();
    }
}
