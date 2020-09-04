import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalarmsComponent } from './modalarms.component';

describe('ModalarmsComponent', () => {
  let component: ModalarmsComponent;
  let fixture: ComponentFixture<ModalarmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalarmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalarmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
