import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

export interface ChildrenItems {
    state: string;
    name: string;
    type?: string;
}

export interface Menu {
    state: string;
    name: string;
    type: string;
    icon: string;
    children?: ChildrenItems[];
}

@Injectable()
export class HorizontalMenuItems {
    pushedAdmin = false;
    public MENUITEMS = [
        {
            name: 'UET Rating',
            type: 'sub',
            class: 'group-title',
            icon: '',
            tutorial: 'stepHome',
            children: [
                {state: '', name: 'NAVBAR.Home', type: 'link'},
                // {state: 'core/account', name: 'NAVBAR.Account', type: 'link'},
                // {state: 'core/setting', name: 'NAVBAR.Setting', type: 'link'}
            ]
        }
    ];

    constructor() {
        if (localStorage.getItem('role') === 'ADMIN') {
            this.MENUITEMS.push({
                name: 'NAVBAR.Admin',
                type: 'sub',
                class: 'group-title',
                icon: '',
                tutorial: 'stepAdmin',
                children: [
                    {state: 'admin/rubric', name: 'NAVBAR.Rubric', type: 'link'},
                    {state: 'admin/subject', name: 'NAVBAR.Subject', type: 'link'},
                    {state: 'admin/teacher', name: 'NAVBAR.Teacher', type: 'link'},
                    {state: 'admin/student', name: 'NAVBAR.Student', type: 'link'}
                ]
            });
            this.MENUITEMS.push({
                name: 'NAVBAR.Statistical',
                type: 'sub',
                class: 'group-title',
                icon: '',
                tutorial: 'stepAdminStatistical',
                children: [
                    {state: 'admin/statistical/subject', name: 'NAVBAR.Subject', type: 'link'},
                    {state: 'admin/statistical/teacher', name: 'NAVBAR.Teacher', type: 'link'},
                ]
            });
        } else if (localStorage.getItem('role') === 'STUDENT') {
            this.MENUITEMS.push({
                name: 'NAVBAR.Subject',
                type: 'sub',
                class: 'group-title',
                icon: '',
                tutorial: 'stepStudentSubject',
                children: [
                    {state: 'student/subject/list', name: 'NAVBAR.All', type: 'link'},
                    {state: 'student/subject/learning', name: 'NAVBAR.Learing', type: 'link'},
                    {state: 'student/subject/not-yet', name: 'NAVBAR.HaventStudiedYet', type: 'link'},
                    {state: 'student/subject/studied', name: 'NAVBAR.Studied', type: 'link'},
                ]
            });
            this.MENUITEMS.push({
                name: 'NAVBAR.Statistical',
                type: 'sub',
                class: 'group-title',
                icon: '',
                tutorial: 'stepStudentStatistical',
                children: [
                    {state: 'student/statistical/your-point', name: 'NAVBAR.YourPoint', type: 'link'},
                    {state: 'student/statistical/subject', name: 'NAVBAR.Subject', type: 'link'},
                ]
            });
        } else if (localStorage.getItem('role') === 'TEACHER') {
            this.MENUITEMS.push({
                name: 'NAVBAR.Subject',
                type: 'sub',
                class: 'group-title',
                icon: '',
                tutorial: 'stepTeacherSubject',
                children: [
                    {state: 'teacher/subject/list', name: 'NAVBAR.All', type: 'link'},
                    {state: 'teacher/subject/teaching', name: 'NAVBAR.Teaching', type: 'link'},
                    {state: 'teacher/subject/taught', name: 'NAVBAR.Taught', type: 'link'},
                ]
            });
            this.MENUITEMS.push({
                name: 'NAVBAR.Statistical',
                type: 'sub',
                class: 'group-title',
                icon: '',
                tutorial: 'stepTeacherStatistical',
                children: [
                    {state: 'teacher/statistical/subject', name: 'NAVBAR.YourClass', type: 'link'},
                    {state: 'teacher/statistical/teacher', name: 'NAVBAR.YourStatistical', type: 'link'},
                ]
            });
        }
    }

    getAll() {
        return this.MENUITEMS;
    }

    add(menu: any) {
        this.MENUITEMS.push(menu);
    }

    contain(menu) {
        for (const m of this.MENUITEMS) {
            if (m === menu) {
                return true;
            }
        }
        return false;
    }

    length() {
        return this.MENUITEMS.length;
    }
}
