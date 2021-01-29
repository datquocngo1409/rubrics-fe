import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth-service/auth.service';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';

@Component({
  selector: 'ms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public translate: TranslateService,
    private router: Router,
  ) {}

  account: string = 'sysadmin';
  user: string = 'admin';
  password: string = 'password';

  ngOnInit() {
    if (this.authService.isUserLogined()) {

      // User has previously logged in
      this.router.navigate(['/']);
    }
  }

  // when email and password is correct, user logged in.
  login(value) {
    this.authService.loginUser(value);
  }

}
