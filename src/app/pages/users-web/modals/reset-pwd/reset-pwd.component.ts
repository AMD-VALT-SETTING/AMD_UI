import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FeedbackMessage } from 'app/FeedbackMessage';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersWeb } from '../../model/UsersWeb';
import { AppConstants } from 'app/app.constants';
import { UsersWebService } from '../../users-web.service';
import { UsersWebList } from '../../model/UsersWebList';
import { ResetPwdService } from './reset-pwd.service';
import { ResetPwdModel } from '../../model/ResetPwdModel';
import { LoggedUser } from 'app/model/LoggedUser';

@Component({
  selector: 'app-reset-pwd',
  templateUrl: './reset-pwd.component.html',
  styleUrls: ['./reset-pwd.component.css']
})
export class ResetPwdComponent implements OnInit {


  _user: UsersWebList;
  usersWebFormReset: FormGroup;

  feedbackReceived: FeedbackMessage;
  @Output()
  feedbackEvent: EventEmitter<FeedbackMessage>;

  loggedUser: LoggedUser;
  usersList: UsersWebList[];
  userFinded: UsersWebList;

  userpwdError: any;

  constructor(private modalService: NgbModal,
    private fb: FormBuilder, private userWebService: UsersWebService, private resetpwd: ResetPwdService) {
    this.feedbackEvent = new EventEmitter();
    this.usersWebFormReset = this.fb.group(
      {
        oldPassword: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
        userPassword: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
      }
    );
  }


  ngOnInit(): void {
    this.recuperaUtenti();
  }

  get user() {
    return this._user;
  }

  @Input()
  set user(u: UsersWebList) {
    this._user = u;
  }

  getUsername() {
    this.loggedUser = JSON.parse(localStorage.getItem(AppConstants.LOGIN_STORAGE));
  }

  openModal(content) {
    if (this._user === undefined) {
      this.getUsername();
      this.usersList.filter(p => {
        if (this.loggedUser.username === p.dsUsername) {
          this._user = p;
        }
      });
    }
    this.modalService.open(content);
  }

  recuperaUtenti() {
    this.userWebService.loadAllUsersWeb().subscribe(res => {
      this.usersList = res['listaUtenti'];
    });
  }

  resetPwd() {
    let oldpwd = this.usersWebFormReset.value.oldPassword;
    let userpwd = this.usersWebFormReset.value.userPassword;
    let confirmpwd = this.usersWebFormReset.value.confirmPassword;

/*    if (userpwd !== confirmpwd) {
      this.userpwdError = 'LE NUOVE PASSWORD NON COINCIDONO';
      this.usersWebFormReset.reset();
      } else if (oldpwd === userpwd) {
      this.userpwdError = 'VECCHIA E NUOVA PASSWORD COINCIDONO';
      this.usersWebFormReset.reset();
    } else {
*/    let userReset: ResetPwdModel = new ResetPwdModel(this._user.dsUsername, oldpwd, userpwd, confirmpwd);
      this.resetpwd.resetPassword(userReset).subscribe(() => {
      this.usersWebFormReset.reset();
      this.modalService.dismissAll();
      },
      (error) => {
        this.userpwdError = error;
        if (error.status === 401) {
          if (error.error.errorCode === 103) {
            this.userpwdError = 'Password e Conferma Password non coincidono';
          }
          if (error.error.errorCode === 105) {
            this.userpwdError = 'Password da cambiare errata';
          }
        }
      });
//    }

//  this.feedbackEvent.emit(new FeedbackMessage(true, 'userWeb aggiunto con successo.'));
//  this._user = null;
  }
}
