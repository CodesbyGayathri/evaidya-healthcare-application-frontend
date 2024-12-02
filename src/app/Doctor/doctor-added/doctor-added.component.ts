import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-doctor-added',
  template: `
    <h1 mat-dialog-title>Newly Added Doctor's Details</h1>
    <div mat-dialog-content>
      <p><strong>Username:</strong> {{ data.username }}</p>
      <p><strong>Password:</strong> {{ data.password }}</p>
      <p><strong>User ID:</strong> {{ data.userId }}</p>
      <p><strong>Doctor ID:</strong> {{ data.doctorId }}</p>
    </div>
    <div mat-dialog-actions align="end">
      <button class="btn btn-danger" mat-dialog-close>Close</button>
    </div>
  `,
  styleUrl: './doctor-added.component.css'
})
export class DoctorAddedComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
