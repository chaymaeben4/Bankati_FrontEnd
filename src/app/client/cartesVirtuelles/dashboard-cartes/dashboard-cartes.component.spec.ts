import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCartesComponent } from './dashboard-cartes.component';

describe('DashboardCartesComponent', () => {
  let component: DashboardCartesComponent;
  let fixture: ComponentFixture<DashboardCartesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardCartesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardCartesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
