import { Component } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { appointment } from '../../Models/appointment.model';
import { UpdateAppointmentStatusDialogComponent } from '../../update-appointment-status-dialog/update-appointment-status-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { app } from '../../../../server';
import { MedicationModalComponent } from '../medication-modal/medication-modal.component';
import { MedicalChartDialogComponent } from '../medical-chart-dialog/medical-chart-dialog.component';

@Component({
  selector: 'app-manage-appointments',
  templateUrl: './manage-appointments.component.html',
  styleUrl: './manage-appointments.component.css'
})
export class ManageAppointmentsComponent {
  appointments: appointment[] = [];
  displayedColumns: string[] = [
    'id', 
    'patientName', 
    'appointmentDate', 
    'appointmentTime', 
    'reasonForAppointment', 
    'status',
    'actions'
  ];
  docId: number;
  medicalchart: any;


  constructor(private appointmentService: AppointmentService, public dialog: MatDialog) {
    this.appointmentService.getAppointmentsbydoc().subscribe(data => {
      console.log(data)
      this.appointments = data;
    });
   }

  ngOnInit(): void {
    
  }

  onViewDetails(appointment: appointment): void {
    // Implement the logic for viewing details of the appointment
    console.log('View details for appointment ID:', appointment.id);
  }

  onChangeStatus(appointment: appointment): void {
    // Implement the logic for changing the status
    const dialogRef = this.dialog.open(UpdateAppointmentStatusDialogComponent, {
      width: '400px',
      data: { currentStatus: appointment.status }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        // Call the service to update the status
        this.appointmentService.updateAppointmentStatus(appointment.id, result).subscribe(
          updatedAppointment => {
            const index = this.appointments.findIndex(a => a.id === updatedAppointment.id);
            if (index !== -1) {
              this.appointments[index] = updatedAppointment;
            }
            console.log(`Appointment ID ${appointment.id} updated successfully.`);
          },
          error => {
            console.error('Error updating appointment status:', error);
          }
        );
      }
    });
    console.log('Change status for appointment ID:', appointment.id);
  }

  onAddPrescriptionNotes(appointment): void {
    console.log(appointment)
    // Implement the logic for adding prescription notes

      const dialogRef = this.dialog.open(MedicationModalComponent, {
        width: '600px',
        data: {
          patientId: appointment.patient.id, // Pass patientId
          doctorId: appointment.doctor.id,  // Pass doctorId
          appointmentId: appointment.id // Pass appointmentId
        }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log('Modal closed with data:', result);
        } else {
          console.log('Modal closed without action');
        }
      });
    
    console.log('Add prescription notes for appointment ID:', appointment.id);
  }

  onMedicalChart(appointment): void{
    this.appointmentService.patientmedicalchart(appointment.patient.id).subscribe(res => {
      console.log(res)
      this.medicalchart = res
    })
    const dialogRef = this.dialog.open(MedicalChartDialogComponent, {
      width: '75%',
      data: this.medicalchart
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Final Medical Chart Data:', result);
      }
    });
  }

}