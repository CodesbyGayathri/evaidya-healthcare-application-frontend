import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent {
  patientName: string;

  constructor(private authservice: AuthService){
    authservice.viewprofile().subscribe({
      next:(response) =>{
        console.log(response)
        this.patientName = response.firstName
        localStorage.setItem('patientName', this.patientName)
        
        
      }, 
      error: (error: HttpErrorResponse) => {
        console.error('Login failed:', error);

      }
    })
  }
}
