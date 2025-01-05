import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimenterPortefeuilleComponent } from './alimenter-portefeuille.component';

describe('AlimenterPortefeuilleComponent', () => {
  let component: AlimenterPortefeuilleComponent;
  let fixture: ComponentFixture<AlimenterPortefeuilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlimenterPortefeuilleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlimenterPortefeuilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
