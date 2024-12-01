import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-appointment-status-dialog',
  templateUrl: './update-appointment-status-dialog.component.html',
  styleUrls: ['./update-appointment-status-dialog.component.css']
})
export class UpdateAppointmentStatusDialogComponent {
  selectedStatus: number;

  constructor(
    public dialogRef: MatDialogRef<UpdateAppointmentStatusDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { currentStatus: number }
  ) {
    this.selectedStatus = data.currentStatus;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    this.dialogRef.close(this.selectedStatus);
  }
}
