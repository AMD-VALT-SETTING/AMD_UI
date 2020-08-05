import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MobileModelsConfigurationComponent } from './mobile-models-configuration.component';


describe('ConfigurazioneModelliMobileComponent', () => {
  let component: MobileModelsConfigurationComponent;
  let fixture: ComponentFixture<MobileModelsConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileModelsConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileModelsConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
