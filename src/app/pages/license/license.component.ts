import { Component, OnInit } from '@angular/core';
import { LicenseService } from './license.service';
import { License } from './model/License';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.css'],
})
export class LicenseComponent implements OnInit {
  licenseTableArray: License[];
  licenseCloudTableArray: any[];
  licenseMobileTableArray: any[];

  constructor(
    private licenseService: LicenseService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
  }

  loadAllLicense() {
    this.licenseService.loadAll().subscribe((res) => {
      this.licenseTableArray = res;
    });
  }
  setLicenseCloud(): any[] {
    this.licenseCloudTableArray = this.licenseTableArray.map(
      (item) => item.licenzaGenerale
    );
    return this.licenseCloudTableArray;
  }
  setLicenseMobile(): any[] {
    this.licenseMobileTableArray = this.licenseTableArray.map(
      (item) => item.licenzaMobile
    );
    return this.licenseMobileTableArray;
  }

  closeResult: string;

  open(content) {
    //const modalRef = this.modalService.open(ModelComponent, { size: 'lg', backdrop: 'static' });

    this.modalService
      .open(content, {
        ariaLabelledBy: 'modal-basic-title',
        size: 'lg',
        centered: true,
        scrollable: true,
        backdrop: 'static',
      })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  }
