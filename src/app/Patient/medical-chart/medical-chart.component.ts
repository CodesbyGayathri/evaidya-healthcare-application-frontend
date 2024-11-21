import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { PatientMedicalChart } from '../../Models/patient.model';

@Component({
  selector: 'app-medical-chart',
  templateUrl: './medical-chart.component.html',
  styleUrl: './medical-chart.component.css'
})
export class MedicalChartComponent {
  patientData: PatientMedicalChart
  patientname: string
  allergies: string
  diagnosis: string
  treatment: string
  constructor(private authservice: AuthService){
    this.authservice.patientmedicalchart().subscribe(response => {
      this.patientname = localStorage.getItem('patientName')
      console.log(response)
      this.allergies = response.allergies 
      this.diagnosis = response.diagnosis
      this.treatment = response.treatment
      
      if(response.allergies == null){
        this.allergies = "No Allergies"
      }
      if(response.diagnosis == null){
        this.diagnosis = "No diagnosis"
      }
      if(response.treatment == null){
        this.treatment = "No treatment"
      }
    })
  }

}
