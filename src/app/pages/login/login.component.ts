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
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  login: LoginData;
  loginResult: LoginResult;
  userLogged: LoggedUser;
  loginError: any;
  
  user: LoggedUser;
  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {
    //this.login = { username: '', password: '', model: 'SM-A405FN', id_device: 'ffe7513684ea8f9b', sdk_int: 25 };
    this.login = { username: '', password: '', model: '', id_device: '', sdk_int: 0 };

  }
/*
  res: LoginResult;
  submit() {
    
    this.authService.authenticate(this.login);
    
    this.user = JSON.parse(localStorage.getItem(AppConstants.LOGIN_STORAGE));

    if (this.user.token === 'WU00000019') {
      this.router.navigate(['dashboard']);

    }//else{this.loginError.message = 'Username o Password Errati';}



  }
*/
 
submit() {
console.log(JSON.stringify(this.login));

this.authService.authenticate(this.login).subscribe(res => {

  console.log('SUBMIT' + res);

  this.loginResult=res;
  this.userLogged={username:this.login.username, token: this.loginResult.token, authorities: [this.loginResult.role] };
  localStorage.setItem(AppConstants.LOGIN_STORAGE, JSON.stringify(this.userLogged));
  this.router.navigate(['dashboard']);

}, error => {

  console.log('ERRORE NEL SUBMIT');
  this.loginError = error;
  if (error.status === 401) {

    if (error.code === 104) {
      this.loginError.message = 'Username o Password Errati';
    }
    if (error.code === 108) {
      this.loginError.message = 'Utente già connesso e con diverso dispositivo mobile';
    }
    if (error.code === 120) {
      this.loginError.message = 'Errore Imprevisto';
    }
    if (error.code === 101) {
      this.loginError.message = 'Licenza scaduta';
    }

  }
});
}





}







