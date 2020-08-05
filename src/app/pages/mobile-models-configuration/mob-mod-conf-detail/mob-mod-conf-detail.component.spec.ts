import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobModConfDetailComponent } from './mob-mod-conf-detail.component';

describe('MobModConfDetailComponent', () => {
  let component: MobModConfDetailComponent;
  let fixture: ComponentFixture<MobModConfDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobModConfDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobModConfDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
