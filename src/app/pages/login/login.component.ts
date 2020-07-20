import { Component, OnInit } from '@angular/core';
import { LoginData } from 'app/auth/model/LoginData';
import { AuthService } from 'app/auth/auth.service';
import { AppConstants } from 'app/app.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  login: LoginData;
  loginError: any;

  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {
    this.login = { username: '', password: '' };
  }

  submit() {
    console.log(JSON.stringify(this.login));
    this.authService.authenticate(this.login).subscribe(res => {
      console.log('SUBMIT'+res);
      localStorage.setItem(AppConstants.LOGIN_STORAGE, JSON.stringify(res));
      this.router.navigate(['dashboard']);
    }, error => {
      console.log('ERRORE NEL SUBMIT');
       this.loginError = error;
    });
  }


}