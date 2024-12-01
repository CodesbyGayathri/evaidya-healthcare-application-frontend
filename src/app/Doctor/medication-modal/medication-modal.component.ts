import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppointmentService } from '../../services/appointment.service';

export interface Medication {
  medicationName: string;
  dosage: string;
  frequency: string;
}

@Component({
  selector: 'app-medication-modal',
  templateUrl: './medication-modal.component.html',
  styleUrls: ['./medication-modal.component.css']
})
export class MedicationModalComponent {
  medications: Medication[] = [{ medicationName: '', dosage: '', frequency: '' }];
  notes: string = '';

  constructor(private appointment: AppointmentService,
    public dialogRef: MatDialogRef<MedicationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { patientId: number; doctorId: number; appointmentId: number }
  ) {}

  addMedication() {
    this.medications.push({ medicationName: '', dosage: '', frequency: '' });
  }

  removeMedication(index: number) {
    this.medications.splice(index, 1);
  }

  onSubmit() {
    const result = {
      patientId: this.data.patientId,
      doctorId: this.data.doctorId,
      appointmentId: this.data.appointmentId,
      medication: this.medications,
      notes: this.notes
    };
    this.appointment.updatePrescriptionNotes(result).subscribe(res => {
      console.log(res)
    })
    console.log('Modal submitted data:', result);
    this.dialogRef.close(result); // Close dialog and pass data
  }

  onCancel() {
    this.dialogRef.close(); // Close dialog without action
  }
}
