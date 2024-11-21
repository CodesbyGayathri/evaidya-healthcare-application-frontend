import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { response } from 'express';
import { HttpErrorResponse } from '@angular/common/http';
import { Patient } from '../../Models/patient.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrl: './view-profile.component.css'
})
export class ViewProfileComponent {
  patient: Patient | null = null;
  patientForm: FormGroup;
  fname: string;
  lname: string;

  constructor(private authservice : AuthService, private fb: FormBuilder){
    this.fname = localStorage.getItem('patientName')
    this.patientForm = this.fb.group({
      email: [{ value: '', disabled: true }, [Validators.required, Validators.email]],
      phoneNo: [{ value: '', disabled: true }],
      gender: [{ value: '', disabled: true }],
      address: this.fb.group({
        aptNumber: [{ value: '', disabled: true }],
        street: [{ value: '', disabled: true }],
        city: [{ value: '', disabled: true }],
        state: [{ value: '', disabled: true }],
        zipcode: [{ value: '', disabled: true }],
      }),
    });
    console.log(authservice.userid)
    authservice.viewprofile().subscribe({
      next:(response) =>{
        console.log(response)
        this.patient = response
        if (this.patient) {
          this.fname = this.patient.firstName
          this.lname = this.patient.lastName
          this.patientForm.patchValue(this.patient);
        }
      }, 
      error: (error: HttpErrorResponse) => {
        console.error('Login failed:', error);

      }
    })
  }

  updateProfile(){
    Object.keys(this.patientForm.controls).forEach((controlName) => {
      this.patientForm.get(controlName)?.enable();
    });

    // Optionally, you can log or show a message to inform the user they can now edit
    console.log('Form fields are now enabled for editing.');
  }
  saveProfile() {
    if (this.patientForm.valid) {
      // Submit form data to API
    console.log(this.patientForm.value)
      this.authservice.updatePatientProfile(this.patientForm.value).subscribe((response) => {
        console.log('Profile updated successfully', response);
      });
    }
  }

}
