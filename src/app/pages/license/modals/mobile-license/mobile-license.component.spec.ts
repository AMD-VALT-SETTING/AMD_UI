import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileLicenseComponent } from './mobile-license.component';

describe('MobileLicenseComponent', () => {
  let component: MobileLicenseComponent;
  let fixture: ComponentFixture<MobileLicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileLicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
