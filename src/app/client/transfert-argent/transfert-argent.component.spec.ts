import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfertArgentComponent } from './transfert-argent.component';

describe('TransfertArgentComponent', () => {
  let component: TransfertArgentComponent;
  let fixture: ComponentFixture<TransfertArgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransfertArgentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransfertArgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
