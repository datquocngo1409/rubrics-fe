import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {AuthGuard} from './core/guards/auth.guard';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'session',
        loadChildren: () => import('./session/session.module').then(m => m.SessionModule)
    },
    {
        path: '',
        component: MainComponent,
        canActivate: [AuthGuard],
        runGuardsAndResolvers: 'always',
        children: [
            {
                path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'admin', loadChildren: () => import('./@pages/pages/admin/admin.module').then(m => m.AdminModule)
            },
            {
                path: 'teacher', loadChildren: () => import('./@pages/pages/teacher/teacher.module').then(m => m.TeacherModule)
            },
            {
                path: 'student', loadChildren: () => import('./@pages/pages/student/student.module').then(m => m.StudentModule)
            },
        ]
    },
    {
        path: '**',
        redirectTo: 'session/login'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
    exports: [RouterModule],
    providers: []
})
export class RoutingModule {
}
