import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Doctor } from '../../Models/doctor.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-manage-doctors',
  templateUrl: './manage-doctors.component.html',
  styleUrl: './manage-doctors.component.css'
})
export class ManageDoctorsComponent {
  doctors: Doctor[];
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'email',
    'specialization',
    'phoneNo',
    'yearsOfExperience',
    'actions'
  ];
  dataSource: MatTableDataSource<Doctor>;
  filterValue: string = '';
  constructor(private admin: AdminService){
    this.admin.GetDoctors().subscribe(response => {
      console.log(response)
      this.doctors = response
      this.dataSource = new MatTableDataSource(this.doctors);
    })
  }
  
  ngOnInit(): void {
    this.dataSource.filterPredicate = (data: Doctor, filter: string) =>
      data.email.trim().toLowerCase().includes(filter.trim().toLowerCase());
  }

  applyFilter(): void {
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
  }

  deleteDoctor(doctorId: number): void {
    console.log('Doctor ID to delete:', doctorId);
    // Optionally, you can remove the doctor from the list
    this.admin.DeleteDoctor(doctorId).subscribe(res => {
      console.log(res)
    })
    this.admin.GetDoctors().subscribe(response => {
      console.log(response)
      this.doctors = response
      this.dataSource = new MatTableDataSource(this.doctors);
    })
  }

}
