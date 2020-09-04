import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudLicenseComponent } from './cloud-license.component';

describe('CloudLicenseComponent', () => {
  let component: CloudLicenseComponent;
  let fixture: ComponentFixture<CloudLicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudLicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
