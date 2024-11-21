import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-prescription-dialog',
  templateUrl: './prescription-dialog.component.html',
  styleUrl: './prescription-dialog.component.css'
})
export class PrescriptionDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<PrescriptionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
