import { TestBed } from '@angular/core/testing';

import { UsersWebService } from './users-web.service';

describe('UsersWebService', () => {
  let service: UsersWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
