import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieTableComponent } from './pie-table.component';

describe('PieTableComponent', () => {
  let component: PieTableComponent;
  let fixture: ComponentFixture<PieTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
