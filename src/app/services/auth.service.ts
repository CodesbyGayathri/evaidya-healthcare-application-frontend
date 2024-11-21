import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient, PatientMedicalChart } from '../Models/patient.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080';
  public userid;

  constructor(private http: HttpClient) {}

  login(credentials: { username: string; password: string }): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl+'/authenticate', credentials, { observe: 'response' });
    
  }

  signup(credentials: { email: string; password: string; firstName: string; lastName: string }): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl+'/patient/signup', credentials, { headers });
  }
  
  viewprofile(): Observable<Patient> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.apiUrl}/api/patient/viewProfile/${localStorage.getItem('userid') }`
    return this.http.get<Patient>(url, {
      headers: { Authorization: localStorage.getItem('jwtToken') }
    });
  }

  updatePatientProfile(patientData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/patient/updateProfile`, patientData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('jwtToken'), // Include JWT token
      },
    });
  }

  patientmedicalchart(): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/medicalChart/getMedicalChart/${localStorage.getItem('userid') }`,{} , {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('jwtToken'), // Include JWT token
      },
    });
  }
    
  }

