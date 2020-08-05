import { TestBed } from '@angular/core/testing';

import { MobileModelsConfigurationService } from './mobile-models-configuration.service';

describe('ConfigurazioneModelliMobileService', () => {
  let service: MobileModelsConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileModelsConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
