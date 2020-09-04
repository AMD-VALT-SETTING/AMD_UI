import { Component, OnInit } from '@angular/core';
import { MobileModelsConfigurationService } from '../mobile-models-configuration.service';
import { MobileModelsConfigurationDetailData } from '../model/MobileModelsConfigurationDetailData';
import { MobileModelsConfigurationDetailResult } from '../model/MobileModelsConfigurationDetailResult';
import { Input } from '@angular/core';
@Component({
  selector: 'app-mob-mod-conf-detail',
  templateUrl: './mob-mod-conf-detail.component.html',
  styleUrls: ['./mob-mod-conf-detail.component.css']
})
export class MobModConfDetailComponent implements OnInit {

  _idModel: string;
  detailResult: MobileModelsConfigurationDetailResult;
  mobModConDetailError: any;



  constructor(private ConfModMobService: MobileModelsConfigurationService) { }

  ngOnInit(): void {
    //this.loadDetail(this.idModel);

  }
  get idModel() {
    return this._idModel;
  }

  @Input()
  set idModel(i: string) {
    this._idModel = i;
    // this.loadDetail(this.idModel)

  }

  seeDetail(s:string){

    this._idModel=s;
    
    this.ConfModMobService.loadDetail(this._idModel).subscribe(res => {

      this.detailResult = res;
    },
      (error) => {
        console.log('ERRORE NELL NEL CARICARE I DETAILS DEI MOBILE MODELS');
        this.mobModConDetailError = error;
      
      });
  }
/* 
  loadDetail(idModel: string) {
    this.ConfModMobService.loadDetail(idModel).subscribe(res => {
   
       this.detailResult = res;
     },
      (error) => {
        console.log('ERRORE NELL NEL CARICARE I DETAILS DEI MOBILE MODELS');
        this.mobModConError = error;
      
      });
   
   console.log(idModel);
   let i='AB-1234'
    if (idModel===i) {
      this.detailResult = { configVersion: '1', config: '{jsonjsonjsonjsonjsonjsonjsonjsonjsonjsonjsonjsonjsonjsonjsonjsonjsonjsonjsonjsonjsonjsonjsonjson}' };
    }

  } */

}
