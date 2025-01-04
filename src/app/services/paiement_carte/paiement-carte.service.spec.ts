import { TestBed } from '@angular/core/testing';

import { PaiementCarteService } from './paiement-carte.service';

describe('PaiementCarteService', () => {
  let service: PaiementCarteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaiementCarteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
