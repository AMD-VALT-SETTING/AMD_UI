import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { FeedbackMessage } from 'app/FeedbackMessage';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersWebComponent } from '../../users-web.component';
import { UsersWebService } from '../../users-web.service';
import { UsersWeb } from '../../model/UsersWeb';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  _user: UsersWeb;
  roles = ['ADMIN', 'USER']
  usersWebFormAdd: FormGroup;
  isValidFormSubmitted = false;
  feedbackReceived: FeedbackMessage;
  addUserError: any;
  @Output()
  feedbackEvent: EventEmitter<FeedbackMessage>;


  constructor(private modalService: NgbModal, private fb: FormBuilder, private userWebService: UsersWebService) {
    this.feedbackEvent = new EventEmitter();
    this.usersWebFormAdd = this.fb.group(
      {
        userName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
        userPassword: ['pwd', ''],
        confirmPassword: ['pwd', ''],
        userEmail: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
        userAlias: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
        role: ['', [Validators.required]]
      }
    );
  }


  ngOnInit(): void {
  }

  get user() {
    return this._user;
  }

  @Input()
  set user(u: UsersWeb) {
    this._user = u;
    this.usersWebFormAdd.get('userName').setValue(u.userName);
    this.usersWebFormAdd.get('userPassword').setValue(u.userPassword);
    this.usersWebFormAdd.get('confirmPassword').setValue(u.confirmPassword);
    this.usersWebFormAdd.get('userEmail').setValue(u.userEmail);
    this.usersWebFormAdd.get('userAlias').setValue(u.userAlias);
    this.usersWebFormAdd.get('role').setValue(u.role);
  }

  openModal(content) {
    this.modalService.open(content);
  }

  save() {
    var userWeb: UsersWeb = this.usersWebFormAdd.value;

    for (let s of userWeb.role) {
      userWeb.role = s;
    }
    console.log('User ' + JSON.stringify(userWeb));
    this.userWebService.addUser(userWeb).subscribe(res => {
      console.log('User Added');
      console.log(JSON.stringify(userWeb));
      this.usersWebFormAdd.reset();
      this.feedbackEvent.emit(new FeedbackMessage(true,
        'User aggiunto con successo.'));
      this._user = null;
    },
      (error) => {
        console.log('ERRORE NELL AGGIUNGERE UN UTENTE');
        this.addUserError = error;

      }

    );
    this.modalService.dismissAll();
  }


}
