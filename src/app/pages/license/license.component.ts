import { Component, OnInit } from '@angular/core';
import { LicenseService } from './license.service';
import { License } from './model/License';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CloudLicense } from './model/CloudLicense';
import { MobileLicense } from './model/MobileLicense';

@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.css'],
})
export class LicenseComponent implements OnInit {
  licenseTableArray: License;
  licenseCloudTableArray: any;
  licenseMobileTableArray: any;

  licenseError: any;

  constructor(
    private licenseService: LicenseService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {

    this.loadAllLicense();

  }

  loadAllLicense() {
    this.licenseService.loadAll().subscribe((res) => {
      this.licenseTableArray = res;
      this.licenseCloudTableArray = this.licenseTableArray.mainLicense;
      this.licenseMobileTableArray = this.licenseTableArray.mobileLicense;
    },
      (error) => {
        this.licenseError = error;
        if (error.status === 401) {
          if (error.error.errorCode === 120) {
            this.licenseError = 'ERRORE IMPREVISTO';
          } else {
            this.licenseError = 'ERRORE RECUPERO LICENZE';
          }
        }
      });
  }



  }


