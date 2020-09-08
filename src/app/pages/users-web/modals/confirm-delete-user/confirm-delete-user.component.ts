import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersWebService } from '../../users-web.service';
import { UserDeleteRequest } from '../../model/UserDeleteRequest';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeedbackMessage } from 'app/FeedbackMessage';

@Component({
  selector: 'app-confirm-delete-user',
  templateUrl: './confirm-delete-user.component.html',
  styleUrls: ['./confirm-delete-user.component.css']
})
export class ConfirmDeleteUserComponent implements OnInit {
  
  _idUserDelete: string;
  confDeleteError: any;
  @Output()
  feedbackEvent: EventEmitter<FeedbackMessage>;

  constructor(private userWebService: UsersWebService,private modalService: NgbModal ) {
    this.feedbackEvent = new EventEmitter();
   }

  ngOnInit(): void {
  }
  openModal(content) {
    this.modalService.open(content);
  }
  get idUserDelete() {
    return this._idUserDelete;
  }

  @Input()
  set idUserDelete(id: string) {
    this._idUserDelete = id;
  }
  deleteUserWeb() {
    let userDelete = new UserDeleteRequest;
    userDelete.idUser = this.idUserDelete;
    this.userWebService.deleteUserWeb(userDelete).subscribe(res => {
     
      this.feedbackEvent.emit(new FeedbackMessage(true,
        'Utente eliminato'));

      this.modalService.dismissAll();
    },
    (error) => {
      console.log('ERRORE NEL CONFERMARE LA CANCELLAZIONE UTENTE');
      this.confDeleteError = error;
      

    });
  }
}
