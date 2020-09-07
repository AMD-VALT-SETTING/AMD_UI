import { Component, OnInit } from '@angular/core';
import { MobileModelsConfigurationService } from '../mobile-models-configuration.service';
import { MobileModelsConfigurationDetail } from '../model/MobileModelsConfigurationDetail';
import { Input } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-mob-mod-conf-detail',
  templateUrl: './mob-mod-conf-detail.component.html',
  styleUrls: ['./mob-mod-conf-detail.component.css']
})
export class MobModConfDetailComponent implements OnInit {


  _detailResult: MobileModelsConfigurationDetail;
  mobModConDetailError: any;





  constructor(private ConfModMobService: MobileModelsConfigurationService) { }

  ngOnInit(): void {}

  get detailResult() {
    return this._detailResult;
  get idModel() {
    return this._idModel;
  }

  @Input()
  set detailResult(d: MobileModelsConfigurationDetail) {
    this._detailResult = d;
  }

  }



  loadDetail(idModel: string) {
    /* this.ConfModMobService.loadDetail(idModel).subscribe(res => {
   
   console.log(idModel);
   let i='AB-1234'
    if (idModel===i) {
      this.detailResult = { configVersion: '1', config: '{jsonjsonjsonjsonjsonjsonjsonjsonjsonjsonjsonjsonjsonjsonjsonjsonjsonjsonjsonjsonjsonjsonjsonjson}' };
    }

  }

}
