import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MobileLicense } from '../../model/MobileLicense';

@Component({
  selector: 'app-mobile-license',
  templateUrl: './mobile-license.component.html',
  styleUrls: ['./mobile-license.component.css']
})
export class MobileLicenseComponent implements OnInit {

  _licenseMobile:any;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {

  }
  openModal(content) {
    this.modalService.open(content);
  
  }
  get licenseMobile() {
    return this._licenseMobile;
    
  }

  @Input()
  set licenseMobile(lM: any[]) {
    this._licenseMobile = lM;
  }
}


