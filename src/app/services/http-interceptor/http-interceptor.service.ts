import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {AuthService} from '../auth-service/auth.service';
import {tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
    constructor(private AuthService: AuthService, private router: Router) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.indexOf('login') === -1) {
            if (this.AuthService.isUserLogined()) {
                const authReq = req.clone({
                    headers: new HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    })
                });
                return next.handle(authReq).pipe( tap(res => {},
                    (err: any) => {
                        if (err instanceof HttpErrorResponse) {
                            if (err.status !== 401) {
                                return;
                            }
                            console.log('session timeout');
                            localStorage.removeItem('authenticatedUser');
                            localStorage.removeItem('language');
                            localStorage.removeItem('token');
                            this.router.navigate(['/session/login']);
                        }
                    }));
            } else {
                this.router.navigate(['/session/login']);
            }
        }
        return next.handle(req);
    }
}
