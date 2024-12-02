import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAddedComponent } from './doctor-added.component';

describe('DoctorAddedComponent', () => {
  let component: DoctorAddedComponent;
  let fixture: ComponentFixture<DoctorAddedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorAddedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
