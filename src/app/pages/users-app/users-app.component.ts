import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FeedbackMessage } from 'app/FeedbackMessage';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersAppService } from './users-app.service';
import { UserAppRequest } from './model/userAppRequest';
import { UsersApp } from './model/userApp'
import { Clist } from './model/clist';


@Component({
  selector: 'app-users-app',
  templateUrl: './users-app.component.html',
  styleUrls: ['./users-app.component.css']
})
export class UsersAPPComponent implements OnInit {

  private employeeForm: FormGroup;
  private userAppRequest: UserAppRequest;
  usersApp: UsersApp[];

  Rsearch_UserName: string;
  Rsearch_Alias: string;
  Rsearch_UserPhone: string;

  userModal: UsersApp;

  @Output()
  feedbackEvent: EventEmitter<FeedbackMessage>;
  usersAppError: any;

  userEmergency: Clist;
  userEmergencyList: Clist[] = [];

  userSelect: UsersApp;

  totalRecords: number;
  page: number = 1;

  constructor(private modalService: NgbModal, private fb: FormBuilder, private userAppService: UsersAppService) {
    this.feedbackEvent = new EventEmitter();
  }

  ngOnInit(): void {

  }

  find() {
    this.loadAll();
  }

  loadAll() {
    this.userAppRequest = new UserAppRequest(this.Rsearch_UserName, this.Rsearch_Alias, this.Rsearch_UserPhone);
    this.userAppService.getUserApp(this.userAppRequest).subscribe((res: any) => {
      this.usersApp = res.listaDevices;
      this.totalRecords = this.usersApp.length;
    },
    (error) => {
      console.error('ERRORE RECUPERO USERAPP DETAIL');
      this.usersAppError = error;
      if (error.status === 401) {
        if (error.code === 102) {
          this.usersAppError.message = 'Utente non valido';
          alert(this.usersAppError.message);
        }
      }
    });
  }

  disable(user: UsersApp) {
    user.enabledLicense = false;
    this.userAppService.disableUser(user).subscribe(() => {

    },
    (error) => {
      console.error('ERRORE DISABILITAZIONE LICENZA');
      this.usersAppError = error;
      if (error.status === 401) {
        if (error.code === 102) {
          this.usersAppError.message = 'Utente non valido';
          alert(this.usersAppError.message);
        }
        if (error.code === 107) {
          this.usersAppError.message = 'Licenza ha raggiunto la max capacità';
          alert(this.usersAppError.message);
        }
        if (error.code === 120) {
          this.usersAppError.message = 'Errore imprevisto';
          alert(this.usersAppError.message);
        }
      }
    });
  }

  enable(user: UsersApp) {
    user.enabledLicense = true;
    this.userAppService.enableUser(user).subscribe(() => {
    },
    (error) => {
      console.error('ERRORE ABILITAZIONE LICENZA');
      this.usersAppError = error;
      if (error.status === 401) {
        if (error.code === 102) {
          this.usersAppError.message = 'Utente non valido';
          alert(this.usersAppError.message);
        }
        if (error.code === 107) {
          this.usersAppError.message = 'Licenza ha raggiunto la max capacità';
          alert(this.usersAppError.message);
        }
        if (error.code === 120) {
          this.usersAppError.message = 'Errore imprevisto';
          alert(this.usersAppError.message);
        }
      }
    });
  }

  openModal(user: UsersApp, userModalReset) {
    this.userModal = user;
    this.modalService.open(userModalReset);
  }

  resetPwd() {
    this.userModal.resetPassword = true;
    this.userAppService.resetPassword(this.userModal).subscribe(() => {

    },
    (error) => {
      console.error('ERRORE RESET PASSWORD');
      this.usersAppError = error;
      if (error.status === 401) {
        if (error.code === 102) {
          this.usersAppError.message = 'Utente non valido';
          alert(this.usersAppError.message);
        }
        if (error.code === 107) {
          this.usersAppError.message = 'Licenza ha raggiunto la max capacità';
          alert(this.usersAppError.message);
        }
        if (error.code === 120) {
          this.usersAppError.message = 'Errore imprevisto';
          alert(this.usersAppError.message);
        }
      }
    });
    this.modalService.dismissAll();
  }

  selectedUser(u: UsersApp, userSelected) {
    this.userSelect = u;
    this.modalService.open(userSelected);
  }

}

