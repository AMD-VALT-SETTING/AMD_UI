import { TestBed } from '@angular/core/testing';

import { UsersAppService } from './users-app.service';

describe('UsersAppService', () => {
  let service: UsersAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
