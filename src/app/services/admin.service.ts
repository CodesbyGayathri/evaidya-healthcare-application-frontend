import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewDoctor } from '../Models/newdoctor.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  AddDoctor(doctor : NewDoctor):Observable<any>{
    return this.http.post(`${this.apiUrl}/api/admin/addDoctor`, doctor, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('jwtToken'), // Include JWT token
      },
    });
  }

  DeleteDoctor(doctorId):Observable<any>{
    return this.http.delete(`${this.apiUrl}/api/admin/deleteDoctor/${doctorId}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('jwtToken'), // Include JWT token
      },
    });
  }

  DeletePatient(patientId):Observable<any>{
    return this.http.delete(`${this.apiUrl}/api/admin/deletePatient/${patientId}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('jwtToken'), // Include JWT token
      },
    });
  }

  GetPatients(): Observable<any>{
    return this.http.get(`${this.apiUrl}/api/admin/viewPatients`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('jwtToken'), // Include JWT token
      },
    });
  }

  GetDoctors(): Observable<any>{
    return this.http.get(`${this.apiUrl}/api/admin/viewDoctors`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('jwtToken'), // Include JWT token
      },
    });
  }


}
