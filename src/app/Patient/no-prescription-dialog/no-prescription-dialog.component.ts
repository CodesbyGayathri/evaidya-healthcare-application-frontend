import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-no-prescription-dialog',
  templateUrl: './no-prescription-dialog.component.html',
  styleUrl: './no-prescription-dialog.component.css'
})
export class NoPrescriptionDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<NoPrescriptionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
