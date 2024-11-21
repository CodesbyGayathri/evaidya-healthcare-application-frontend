import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPrescriptionDialogComponent } from './no-prescription-dialog.component';

describe('NoPrescriptionDialogComponent', () => {
  let component: NoPrescriptionDialogComponent;
  let fixture: ComponentFixture<NoPrescriptionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoPrescriptionDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoPrescriptionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
