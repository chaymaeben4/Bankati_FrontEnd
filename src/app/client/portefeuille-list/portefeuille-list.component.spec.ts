import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortefeuilleListComponent } from './portefeuille-list.component';

describe('PortefeuilleListComponent', () => {
  let component: PortefeuilleListComponent;
  let fixture: ComponentFixture<PortefeuilleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortefeuilleListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortefeuilleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
