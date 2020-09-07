import { Component, OnInit } from '@angular/core';
import { LoginData } from 'app/auth/model/LoginData';
import { AuthService } from 'app/auth/auth.service';
import { AppConstants } from 'app/app.constants';
import { Router } from '@angular/router';
import { LoginResult } from 'app/auth/model/LoginResult';
import { LoggedUser } from 'app/model/LoggedUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: LoginData;
  loginResult: LoginResult;
  userLogged: LoggedUser;
  loginError: any;
  user: LoggedUser;

  constructor(private authService: AuthService, public router: Router) {}

  ngOnInit() {
    this.login = {
      username: '',
      password: '',
      model: '',
      id_device: '',
      sdk_int: 0,
    };
  }

  submit() {
    this.authService.authenticate(this.login).subscribe(
      (res) => {
        this.userLogged = {
          username: this.login.username,
          token: res.token,
          authorities: [res.role],
          message:res.message
        };
        localStorage.setItem(
          AppConstants.LOGIN_STORAGE,
          JSON.stringify(this.userLogged)
        );
        
        this.router.navigate(['dashboard']);
      },
      (error) => {
        console.log('ERRORE NEL SUBMIT');
        this.loginError = error;
       
       
      }
    );
  }
}
