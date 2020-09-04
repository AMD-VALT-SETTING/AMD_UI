import { Component, OnInit } from '@angular/core';

import { MobileModelsConfigurationService } from './mobile-models-configuration.service';
import { MobileModelsConfiguration } from './model/MobileModelsConfiguration';
import { MobileModelsConfigurationDetailResult } from './model/MobileModelsConfigurationDetailResult';

@Component({
  selector: 'app-mobile-models-configuration',
  templateUrl: './mobile-models-configuration.component.html',
  styleUrls: ['./mobile-models-configuration.component.css']
})
export class MobileModelsConfigurationComponent implements OnInit {
  
  mobModConfTableArray: MobileModelsConfiguration[];
  mobModConfTableDetail:MobileModelsConfigurationDetailResult;
  selectedMobModConf:string;
  mobModConError: any;

  constructor(private ConfModMobService:MobileModelsConfigurationService) { }

  ngOnInit(): void {
    this.loadAll();
   // this.mobModConfTableArray=[{id_Model:'AB-1234',model:'NOKIA',modelBrand:'NKA10',modelVersion:2}]
  }
  loadAll() {
    this.ConfModMobService.loadAll().subscribe(res => {

      this.mobModConfTableArray = res;
    }
    ,
      (error) => {
        console.log('ERRORE NELL NEL CARICARE I MOBILE MODELS');
        this.mobModConError = error;
        if (error.status === 401) {
         
          if (error.code === 120) {
            this.mobModConError.message = 'Errore imprevisto';
          }

        }
      });
  }
  /* seeDetail(s:string){

    this.selectedMobModConf=s;
    
    this.ConfModMobService.loadDetail(this.selectedMobModConf).subscribe(res => {

      this.mobModConfTableDetail = res;
    },
      (error) => {
        console.log('ERRORE NELL NEL CARICARE I DETAILS DEI MOBILE MODELS');
        this.mobModConError = error;
      
      });
  } */

 
}
