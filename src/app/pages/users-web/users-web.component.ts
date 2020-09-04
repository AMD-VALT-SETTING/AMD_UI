import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UsersWebService } from './users-web.service';
import { UsersWeb } from './model/UsersWeb';
import { FeedbackMessage } from 'app/FeedbackMessage';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users-web',
  templateUrl: './users-web.component.html',
  styleUrls: ['./users-web.component.css']
})
export class UsersWebComponent implements OnInit {

  usersWeb: UsersWeb[];
  userWeb:UsersWeb;
  _user: UsersWeb;
  
  usersWebForm: FormGroup;
  feedbackReceived: FeedbackMessage;
  @Output()
  feedbackEvent: EventEmitter<FeedbackMessage>;


  
    


  constructor(private userWebService: UsersWebService,private modalService: NgbModal,private fb: FormBuilder,) {  
   

    this.feedbackEvent = new EventEmitter();
    
  }
  ngOnInit(): void {

   this.loadAllUsersWeb();
  }
 
  openModal(content){
    this.modalService.open(content);
  }

  loadAllUsersWeb() {
    this.usersWeb=[{idUser:'', userName:'pippo',userPassword:'pwd',confirmPassword:'pwd', userEmail:'pippo.pluto@gmail.com', userAlias:'Pippo', role:'Admin'}];//admin='300'
    /*
    this.userWebService.loadAllUsersWeb().subscribe((res) => {

      this.usersWeb = res;

    });*/
  }
  /*
  resetPwd(u:UsersWeb){
    this.userWeb=u;

  }
  */
  feedbackReceivedHandler(fm: FeedbackMessage) {
    this.loadAllUsersWeb();
    this.feedbackReceived = fm;
    this.userWeb = null;
  }
  
 
  
}
