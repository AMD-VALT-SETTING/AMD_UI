import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAPPComponent } from './users-app.component';

describe('UtentiAPPComponent', () => {
  let component: UsersAPPComponent;
  let fixture: ComponentFixture<UsersAPPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersAPPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersAPPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
