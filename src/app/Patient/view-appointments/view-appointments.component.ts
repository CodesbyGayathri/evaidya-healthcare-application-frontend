import { Component } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { Doctor } from '../../Models/doctor.model';
import { response } from 'express';
import { DoctorSlotModalComponent } from '../doctor-slot-modal/doctor-slot-modal.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-view-appointments',
  templateUrl: './view-appointments.component.html',
  styleUrl: './view-appointments.component.css'
})
export class ViewAppointmentsComponent {
  displayedColumns: string[] = ['firstName', 'lastName', 'specialization', 'yearsOfExperience', 'action'];
  dataSource: Doctor[] = []; // Array of doctors as the data source for the table
  selectedDate: Date | null = null;
  patientname: string

  constructor(private appointmentService: AppointmentService, private dialog : MatDialog) {
    this.patientname = localStorage.getItem('patientName')
  }

  dateFilter = (date: Date | null): boolean => {
    if (!date) {
      return false;
    }
    const day = date.getDay(); // Get the day of the week (0 = Sunday, 6 = Saturday)
    const today = new Date(); // Current date
    today.setHours(0, 0, 0, 0); // Remove time portion

    return date >= today && day !== 0 && day !== 6; // Enable only dates that are today or later and not weekends
  };

  ngOnInit(): void {
    this.getDoctors();
  }

  getDoctors(): void {
    this.appointmentService.getDoctors().subscribe((response: Doctor[]) => {
      this.dataSource = response; // Assign the response to the table data source
    });
  }

  onDoctorClick(doctorId: number, appointmentDate: Date | null, firstName: string, lastName: string): void {
    if (!appointmentDate) {
      console.log('Please select an appointment date before proceeding.');
    } else {
      const formattedDate = appointmentDate.toISOString().slice(0, 10);
      console.log(`Doctor ID: ${doctorId}, Appointment Date: ${formattedDate}`);
  
      this.appointmentService.getDoctorSlots(doctorId, formattedDate).subscribe(response => {
        console.log(response);
  
        // Open modal with slots data
        this.dialog.open(DoctorSlotModalComponent, {
          width: '500px',
          data: {
            firstName,
            lastName,
            doctorId,
            appointmentDate: formattedDate,
            slots: response
          }
        });
      });
    }
  }
}
