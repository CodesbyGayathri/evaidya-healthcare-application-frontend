import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'app-doctor-slot-modal',
  templateUrl: './doctor-slot-modal.component.html',
  styleUrls: ['./doctor-slot-modal.component.css']
})
export class DoctorSlotModalComponent {
  selectedSlot: string | null = null;
  reasonForVisit: string = '';
  

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DoctorSlotModalComponent>,
    private appointmentservice: AppointmentService
  ) {}

  get slots() {
    return this.data.slots;
  }

  get doctorname(){
    return `${this.data.firstName} ${this.data.lastName}`
  }

  selectSlot(slot: string): void {
    this.selectedSlot = slot;
  }

  bookSlot(): void {
    if (!this.selectedSlot || !this.reasonForVisit.trim()) {
      console.log('Please select a slot and provide a reason for visit.');
      return;
    }

    const bookingDetails = {
      patientId: Number(localStorage.getItem('userid')),
      doctorId: this.data.doctorId,
      date: this.data.appointmentDate,
      time: this.selectedSlot,
      reasonForAppointment: this.reasonForVisit
    };

    console.log('Booking Details:', bookingDetails);
     this.appointmentservice.bookSlot(bookingDetails).subscribe(response =>{
      console.log(response)
     })
    
    this.dialogRef.close();
  }
}
