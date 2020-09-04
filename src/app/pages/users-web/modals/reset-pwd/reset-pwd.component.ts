import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FeedbackMessage } from 'app/FeedbackMessage';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersWebService } from '../../users-web.service';
import { UsersWeb } from '../../model/UsersWeb';

@Component({
  selector: 'app-reset-pwd',
  templateUrl: './reset-pwd.component.html',
  styleUrls: ['./reset-pwd.component.css']
})
export class ResetPwdComponent implements OnInit {

  
  _user: UsersWeb;
  usersWebFormReset: FormGroup;
  feedbackReceived: FeedbackMessage;
  //resetPwdError:any;
  @Output()
  feedbackEvent: EventEmitter<FeedbackMessage>;
  
  
  constructor(private modalService: NgbModal,private fb: FormBuilder,private userWebService: UsersWebService) { 
    this.feedbackEvent = new EventEmitter();
    this.usersWebFormReset = this.fb.group(
      {
      
        userPassword:['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
        confirmPassword:['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],

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
    
    /* 
    this.usersWebFormReset.get('userPassword').setValue(u.userPassword);
    this.usersWebFormReset.get('confirmPassword').setValue(u.confirmPassword);
  */
  }
  openModal(content){
    this.modalService.open(content);
  }
  resetPwd() {
/* 
    var userWeb: UsersWeb = this.usersWebFormReset.value;
    
    this.userWebService.save(userWeb).subscribe(res => {
      console.log('SAVE SUCCESS');

      this.usersWebFormReset.reset();
      console.log(JSON.stringify(userWeb));
      this.feedbackEvent.emit(new FeedbackMessage(true,
        'userWeb aggiunto con successo.'));

      this._user = null; */


   /* }
   ,
      (error) => {
        console.log('ERRORE NEL RESET PWD');
        this.resetPwdError = error;
       
      });*/

  }
 
}
