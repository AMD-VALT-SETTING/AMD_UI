import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllarmsComponent } from './allarms.component';

describe('AlarmsComponent', () => {
  let component: AllarmsComponent;
  let fixture: ComponentFixture<AllarmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllarmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllarmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
