import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementMultiDeviseComponent } from './paiement-multi-devise.component';

describe('PaiementMultiDeviseComponent', () => {
  let component: PaiementMultiDeviseComponent;
  let fixture: ComponentFixture<PaiementMultiDeviseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaiementMultiDeviseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaiementMultiDeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
