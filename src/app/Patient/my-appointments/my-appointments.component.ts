import { Component } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { MatDialog } from '@angular/material/dialog';
import { PrescriptionDialogComponent } from '../prescription-dialog/prescription-dialog.component';

@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.component.html',
  styleUrl: './my-appointments.component.css'
})
export class MyAppointmentsComponent {
  patientName: string
  displayedColumns: string[] = ['Doctor', 'AppointmentDate', 'AppointmentTime', 'Status', 'ViewPrescription'];
  dataSource: any[] = []; // Array of doctors as the data source for the table
  selectedDate: Date | null = null;
  patientname: string

  constructor(private appointmentservice: AppointmentService, public dialog: MatDialog){
    this.patientName = localStorage.getItem('patientName')
  }

  ngOnInit(): void {
    this.getAppointment();
  }

  getAppointment(): void {
    this.appointmentservice.getPatientAppoints().subscribe(response => {
      console.log(response)
      this.dataSource = response
    })
  }

  onViewPrescription(appointmentId, patientId){
    this.appointmentservice.getPrescription(appointmentId, patientId).subscribe(response => {
      console.log(response)   
      if(response[0]){
        this.dialog.open(PrescriptionDialogComponent, {
          data: response[0],
          width: '75%', // Set dialog width to 75% of the screen
          height: 'auto'
        });}
    })
  }

}
