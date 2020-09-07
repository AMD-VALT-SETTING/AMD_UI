import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LicenseEvent } from '../../LicenseEvent';
import { CloudLicense } from '../../model/CloudLicense';
@Component({
  selector: 'app-cloud-license',
  templateUrl: './cloud-license.component.html',
  styleUrls: ['./cloud-license.component.css']
})
export class CloudLicenseComponent implements OnInit {

  _licenseCloud: any;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openModal(content) {
    this.modalService.open(content);
  }

  get licenseCloud() {
    return this._licenseCloud;
  }

  @Input()
  set licenseCloud(lC: CloudLicense) {
    this._licenseCloud = lC;
  }

}
