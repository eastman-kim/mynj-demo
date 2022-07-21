import { TestBed } from '@angular/core/testing';

import { NongjangService } from './nongjang.service';

describe('NongjangService', () => {
  let service: NongjangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NongjangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
