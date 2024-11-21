import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorSlotModalComponent } from './doctor-slot-modal.component';

describe('DoctorSlotModalComponent', () => {
  let component: DoctorSlotModalComponent;
  let fixture: ComponentFixture<DoctorSlotModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorSlotModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorSlotModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
