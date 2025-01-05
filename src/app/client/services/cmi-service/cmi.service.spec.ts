import { TestBed } from '@angular/core/testing';

import { CmiService } from './cmi.service';

describe('CmiService', () => {
  let service: CmiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
