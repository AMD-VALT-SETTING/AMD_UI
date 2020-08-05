import { Component, OnInit } from '@angular/core';

import { MobileModelsConfigurationService } from './mobile-models-configuration.service';
import { MobileModelsConfiguration } from './model/MobileModelsConfiguration';

@Component({
  selector: 'app-mobile-models-configuration',
  templateUrl: './mobile-models-configuration.component.html',
  styleUrls: ['./mobile-models-configuration.component.css']
})
export class MobileModelsConfigurationComponent implements OnInit {

  confMofMobileTableArray: MobileModelsConfiguration[] = [];

  constructor(private ConfModMobService: MobileModelsConfigurationService) { }

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.ConfModMobService.loadAll().subscribe(res => {

      this.confMofMobileTableArray = res;
    });
  }
}
