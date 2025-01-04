import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerPaiementRecurrentComponent } from './creer-paiement-recurrent.component';

describe('CreerPaiementRecurrentComponent', () => {
  let component: CreerPaiementRecurrentComponent;
  let fixture: ComponentFixture<CreerPaiementRecurrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreerPaiementRecurrentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreerPaiementRecurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
