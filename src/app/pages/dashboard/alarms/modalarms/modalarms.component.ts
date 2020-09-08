import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdateAlarm } from '../../model/UpdateAlarm';
import { Alarms } from '../../model/Alarms';
import { DashboardComponent } from '../../dashboard.component';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-modalarms',
  templateUrl: './modalarms.component.html',
  styleUrls: ['./modalarms.component.css']
})
export class ModalarmsComponent implements OnInit {

  errorAlarm:any;

  _selectedUpdateAlarm : string;

  constructor(private modalService:NgbModal, private updateAlarmService: DashboardService) { }

  ngOnInit(): void {
   
  }

  openModal(content) {
    this.errorAlarm=undefined;
    this.modalService.open(content);
    
  }

  updateAlarm(){
    let upAlarm= new UpdateAlarm();
    upAlarm.idAlarm =this._selectedUpdateAlarm;
    this.updateAlarmService.updateAlarm(upAlarm).subscribe((res) => {
     
    },(error) => {
      console.log('ERRORE ALLARME');
      this.errorAlarm = error;
      if(this.errorAlarm.statusText==="Unknown Error"){
        this.errorAlarm.statusText='Errore imprevisto';
      }
    });
    this.modalService.dismissAll();
  }
  

  get selectedUpdateAlarm(){
    return this._selectedUpdateAlarm;
  }

  @Input()
  set selectedUpdateAlarm(idAlarm:string){
    this._selectedUpdateAlarm=idAlarm;

  }

  }


