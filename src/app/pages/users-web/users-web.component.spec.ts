import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersWebComponent } from './users-web.component';

describe('UtentiWebComponent', () => {
  let component: UsersWebComponent;
  let fixture: ComponentFixture<UsersWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
