import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Doctor } from '../../Models/doctor.model';
import { MatTableDataSource } from '@angular/material/table';
import { Patient } from '../../Models/patient.model';

@Component({
  selector: 'app-manage-patient',
  templateUrl: './manage-patient.component.html',
  styleUrl: './manage-patient.component.css'
})
export class ManagePatientComponent {
  patients: Patient[];
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'email',
    'phoneNo',
    'gender',
    'actions'
  ];
  dataSource: MatTableDataSource<Patient>;
  filterValue: string = '';
  constructor(private admin: AdminService){
    this.admin.GetPatients().subscribe(response => {
      console.log(response)
      this.patients = response
      this.dataSource = new MatTableDataSource(this.patients);
    })
  }
  
  ngOnInit(): void {
    this.dataSource.filterPredicate = (data: Patient, filter: string) =>
      data.email.trim().toLowerCase().includes(filter.trim().toLowerCase());
  }

  applyFilter(): void {
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
  }

  deleteDoctor(patientId: number): void {
    console.log('Patient ID to delete:', patientId);
    // Optionally, you can remove the doctor from the list
    this.admin.DeletePatient(patientId).subscribe(res => {
      console.log(res)
    })
  }

}
