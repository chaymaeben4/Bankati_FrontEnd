import { TestBed } from '@angular/core/testing';

import { CartesVirtuellesService } from './cartes-virtuelles.service';

describe('CartesVirtuellesService', () => {
  let service: CartesVirtuellesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartesVirtuellesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
