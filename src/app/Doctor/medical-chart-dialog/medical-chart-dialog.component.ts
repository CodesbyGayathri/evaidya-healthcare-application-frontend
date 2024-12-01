import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'app-medical-chart-dialog',
  templateUrl: './medical-chart-dialog.component.html',
  styleUrls: ['./medical-chart-dialog.component.css']
})
export class MedicalChartDialogComponent {
  showNewFields = false; // To toggle visibility of new fields
  medicalChart: any;     // Data passed to the modal
  patientData = {
    patientId: this.data.patient.id,
    diagnosis: "",
    treatment: "",
    allergies: ""
  };
  constructor(private service: AppointmentService,
    public dialogRef: MatDialogRef<MedicalChartDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.medicalChart = {
      pastDiagnosis: this.formatMultilineData(data.diagnosis),
      pastTreatment: this.formatMultilineData(data.treatment),
      pastAllergies: this.formatMultilineData(data.allergies),
      newDiagnosis: '',
      newTreatment: '',
      newAllergies: ''
    };
  }
  formatMultilineData(data: string): string {
    return data ? data.split("\n").join(" ") : '';
  }

  submitMedicalChart(): void {
    this.patientData.allergies = this.medicalChart.newAllergies;
    this.patientData.diagnosis = this.medicalChart.newAllergies;
    this.patientData.treatment = this.medicalChart.newAllergies;

    console.log('Submitted Medical Chart Data:', this.patientData);
    this.service.updateMedicalChart(this.patientData).subscribe(res => {console.log(res)})
    this.dialogRef.close(); // Close modal and return data
  }
}
