import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerCarteComponent } from './creer-carte.component';

describe('CreerCarteComponent', () => {
  let component: CreerCarteComponent;
  let fixture: ComponentFixture<CreerCarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreerCarteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreerCarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
