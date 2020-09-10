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
        console.log('ERRORE RECUPERO MOBILE');
        this.mobModConError = error;
        if (error.status === 401) {
          if (error.error.errorCode === 102) {
            this.mobModConError = 'Utente non valido';
          }
          if (error.error.errorCode === 120) {
            this.mobModConError = 'Errore imprevisto';
          }
        } else {
          this.mobModConError = 'Errore imprevisto';
        }
      });
  }

  seeDetail(idModel: string) {
    this.ConfModMobService.loadDetail(idModel).subscribe((res: any) => {
      this.mobModConfDetailSelected = res;
    },
      (error) => {
        console.log('ERRORE RECUPERO DETTAGLI MOBILE');
        this.mobModConError = 'ERRORE RECUPERO DETTAGLI MOBILE';
      });
  }

}
