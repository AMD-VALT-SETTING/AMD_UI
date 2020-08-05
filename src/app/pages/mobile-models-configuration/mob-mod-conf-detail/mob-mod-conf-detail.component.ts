import { Component } from '@angular/core';
import { MobileModelsConfigurationService } from '../mobile-models-configuration.service';

@Component({
  selector: 'app-mob-mod-conf-detail',
  templateUrl: './mob-mod-conf-detail.component.html',
  styleUrls: ['./mob-mod-conf-detail.component.css']
})
export class MobModConfDetailComponent {

/*  detailData: MobileModelsConfigurationDetailData;
  detailResult: MobileModelsConfigurationDetailResult;
  confMofMobileDetailTableArray: MobileModelsConfigurationDetailResult[];*/

  constructor(private ConfModMobService: MobileModelsConfigurationService) { }

  /*ngOnInit(): void {
    this.loadDetail(this.detailData);
  }

  loadDetail(detailData: MobileModelsConfigurationDetailData) {
    this.ConfModMobService.loadDetail(detailData).subscribe(res => {

      this.detailResult = res;
    });
  }*/
}
