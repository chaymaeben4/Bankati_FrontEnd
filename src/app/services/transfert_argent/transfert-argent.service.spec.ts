import { TestBed } from '@angular/core/testing';

import { TransfertArgentService } from './transfert-argent-service.service';

describe('TransfertArgentServiceService', () => {
  let service: TransfertArgentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransfertArgentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
