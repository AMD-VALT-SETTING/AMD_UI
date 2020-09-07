import { Component, OnInit } from '@angular/core';
import { MobileModelsConfigurationService } from '../mobile-models-configuration.service';
import { MobileModelsConfigurationDetail } from '../model/MobileModelsConfigurationDetail';
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
  }

  @Input()
  set detailResult(d: MobileModelsConfigurationDetail) {
    this._detailResult = d;
  }
}
