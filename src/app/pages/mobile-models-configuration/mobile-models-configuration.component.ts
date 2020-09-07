import { Component, OnInit } from '@angular/core';

import { MobileModelsConfigurationService } from './mobile-models-configuration.service';
import { MobileModelsConfiguration } from './model/MobileModelsConfiguration';
import { MobileModelsConfigurationDetail } from './model/MobileModelsConfigurationDetail';

@Component({
  selector: 'app-mobile-models-configuration',
  templateUrl: './mobile-models-configuration.component.html',
  styleUrls: ['./mobile-models-configuration.component.css']
})
export class MobileModelsConfigurationComponent implements OnInit {

  mobModConfTableArray: MobileModelsConfiguration[];
  mobModConfDetailSelected: MobileModelsConfigurationDetail;
  selectedMobModConf: string;
  mobModConError: any;

  constructor(private ConfModMobService: MobileModelsConfigurationService) { }

  ngOnInit(): void {
    this.loadAll();
  }
  loadAll() {
    this.ConfModMobService.loadAll().subscribe(res => {
      this.mobModConfTableArray = res['modelList'];
    },
      (error) => {
        console.log('ERRORE NELL NEL CARICARE I MOBILE MODELS');
        this.mobModConError = error;
      });
  }

  seeDetail(idModel: string) {
    this.ConfModMobService.loadDetail(idModel).subscribe((res:any) => {
      this.mobModConfDetailSelected = res;
    },
      (error) => {
        console.log('ERRORE NELL NEL CARICARE I DETAILS DEI MOBILE MODELS');
        this.mobModConError = error;
       
      });
  }
  seeDetail(idModel: string) {

    this.ConfModMobService.loadDetail(idModel).subscribe((res:any) => {

      this.mobModConfDetailSelected = res;
    },
      (error) => {
        console.log('ERRORE NELL NEL CARICARE I DETAILS DEI MOBILE MODELS');
        this.mobModConError = error;

      });
  }


}
