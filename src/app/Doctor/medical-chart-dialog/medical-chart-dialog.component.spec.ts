import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalChartDialogComponent } from './medical-chart-dialog.component';

describe('MedicalChartDialogComponent', () => {
  let component: MedicalChartDialogComponent;
  let fixture: ComponentFixture<MedicalChartDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicalChartDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicalChartDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
