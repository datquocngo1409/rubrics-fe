import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthService} from '../../services/auth-service/auth.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'ms-forgot-password',
    templateUrl: './forgot-password-component.html',
    styleUrls: ['./forgot-password-component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ForgotPasswordComponent {

    account: string;
    user: string;
    email: string;

    constructor(public authService: AuthService,
                public translate: TranslateService) {
    }

    /**
     * send method is used to send a reset password link into your email.
     */
    send(value) {
        this.authService.resetPassword(value);
    }
}



