import { Component, OnInit } from '@angular/core';

import { MobileModelsConfigurationService } from './mobile-models-configuration.service';
import { MobileModelsConfiguration } from './model/MobileModelsConfiguration';

@Component({
  selector: 'app-mobile-models-configuration',
  templateUrl: './mobile-models-configuration.component.html',
  styleUrls: ['./mobile-models-configuration.component.css']
})
export class MobileModelsConfigurationComponent implements OnInit {

  mobModConfTableArray: MobileModelsConfiguration[];
  selectedMobModConf: string;

  constructor(private ConfModMobService: MobileModelsConfigurationService) { }

  ngOnInit(): void {
    // this.loadAll();
    this.mobModConfTableArray = [
      {id_Model: 'AB-1234', model: 'NOKIA', modelBrand: 'NKA10', modelVersion: 2},
      {id_Model: 'AB-1234', model: '212', modelBrand: 'eeee', modelVersion: 2},
    ];
  }

  loadAll() {
    this.ConfModMobService.loadAll().subscribe(res => {

      this.mobModConfTableArray = res;
    });
  }

  seeDetail(s: string) {

    this.selectedMobModConf = s;
  }

 
}
