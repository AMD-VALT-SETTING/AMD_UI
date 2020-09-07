import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UsersWebService } from './users-web.service';
import { UsersWebList } from './model/UsersWebList';
import { FeedbackMessage } from 'app/FeedbackMessage';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDeleteRequest } from './model/UserDeleteRequest';

@Component({
  selector: 'app-users-web',
  templateUrl: './users-web.component.html',
  styleUrls: ['./users-web.component.css']
})
export class UsersWebComponent implements OnInit {

  usersWeb: UsersWebList[];
  userWeb: UsersWebList;
  _user: UsersWebList;

  usersWebForm: FormGroup;
  feedbackReceived: FeedbackMessage;
  @Output()
  feedbackEvent: EventEmitter<FeedbackMessage>;

  constructor(private userWebService: UsersWebService, private modalService: NgbModal, private fb: FormBuilder,) {
    this.feedbackEvent = new EventEmitter();
  }


  constructor(private userWebService: UsersWebService, private modalService: NgbModal, private fb: FormBuilder,) {


    this.feedbackEvent = new EventEmitter();

  }
  ngOnInit(): void {
    this.loadAllUsersWeb();
    this.loadAllUsersWeb();
  }

  openModal(content) {
    this.modalService.open(content);
  }

  loadAllUsersWeb() {

    this.userWebService.loadAllUsersWeb().subscribe((res) => {

      this.usersWeb = res['listaUtenti'];
     

    });
  }

  deleteUserWeb(idUser:string) {
    
    let userDelete= new UserDeleteRequest;
    userDelete.idUser=idUser;
    
    this.userWebService.deleteUserWeb(userDelete).subscribe(res => {

      alert('Utente eliminato');
      this.loadAllUsersWeb()

    });
   
  }

  feedbackReceivedHandler(fm: FeedbackMessage) {

    this.feedbackReceived = fm;
    if (this.feedbackReceived.success) {

      this.loadAllUsersWeb();

    }

    this.userWeb = null;
  }



  openModal(content) {
    this.modalService.open(content);
  }

  loadAllUsersWeb() {
    this.userWebService.loadAllUsersWeb().subscribe((res) => {
    this.usersWeb = res['listaUtenti'];
    });
  }

  deleteUserWeb(idUser: string) {
    let userDelete = new UserDeleteRequest;
    userDelete.idUser = idUser;
    this.userWebService.deleteUserWeb(userDelete).subscribe(res => {
      alert('Utente eliminato');
      this.loadAllUsersWeb()
    });
  }

  feedbackReceivedHandler(fm: FeedbackMessage) {
    this.feedbackReceived = fm;
    if (this.feedbackReceived.success) {
      this.loadAllUsersWeb();
    }
    this.userWeb = null;
  }
}

