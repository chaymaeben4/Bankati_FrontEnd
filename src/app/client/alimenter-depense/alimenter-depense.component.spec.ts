import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimenterDepenseComponent } from './alimenter-depense.component';

describe('AlimenterDepenseComponent', () => {
  let component: AlimenterDepenseComponent;
  let fixture: ComponentFixture<AlimenterDepenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlimenterDepenseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlimenterDepenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
