import { TestBed } from '@angular/core/testing';

import { PaiementRecurrentService } from './paiement-recurrent.service';

describe('PaiementRecurrentService', () => {
  let service: PaiementRecurrentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaiementRecurrentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
