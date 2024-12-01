import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiUrl = 'http://localhost:8080';
  public userid;

  constructor(private http: HttpClient) {}

  getDoctors(): Observable<any> {
    const url = `${this.apiUrl}/api/admin/viewDoctors`
    return this.http.get<any>(url, {
      headers: { 'Content-Type': 'application/json', Authorization: localStorage.getItem('jwtToken') },
    });
  }
  getDoctorSlots(doctorId, selectedDate): Observable<any> {
    const url = `${this.apiUrl}/api/appointment/doctor/${doctorId}/slots`
    return this.http.get<any>(url, {
      headers: { 'Content-Type': 'application/json', Authorization: localStorage.getItem('jwtToken') },
      params:{date: selectedDate}
    });
  }

  bookSlot(details): Observable<any>{
    const url = `${this.apiUrl}/api/appointment/book`
    return this.http.post(url, details, {
      headers: { 'Content-Type': 'application/json', Authorization: localStorage.getItem('jwtToken') }
    });
  }
  getPatientAppoints(): Observable<any> {
    const url = `${this.apiUrl}/api/appointment/view/patient/${localStorage.getItem('userid')}`
    return this.http.get<any>(url, {
      headers: { 'Content-Type': 'application/json', Authorization: localStorage.getItem('jwtToken') }
    });
  }

  getPrescription(appointmentId, patientId): Observable<any>{
    const url = `${this.apiUrl}/api/prescription/view/prescription/${patientId}/${appointmentId}`
    return this.http.get<any>(url, {
      headers: { 'Content-Type': 'application/json', Authorization: localStorage.getItem('jwtToken') }
    });
  }

  getAppointments(): Observable<any> {
    const url = `${this.apiUrl}/api/appointment/view/patient/${localStorage.getItem('userid')}`
    return this.http.get<any>(url, {
      headers: { 'Content-Type': 'application/json', Authorization: localStorage.getItem('jwtToken') }
    });
  }

  getAppointmentsbydoc(): Observable<any> {
    const url = `${this.apiUrl}/api/appointment/view/doctor/${localStorage.getItem("docId")}`
    return this.http.get<any>(url, {
      headers: { 'Content-Type': 'application/json', Authorization: localStorage.getItem('jwtToken') }
    });
  }

  updateAppointmentStatus(appointmentId: number, statusCode: number): Observable<any> {
    const params = new HttpParams().set('status', statusCode.toString());
    const url = `${this.apiUrl}/api/appointment/updateAppointmentStatus/${appointmentId}`;
  
    return this.http.put<any>(url, {}, { params,  headers: { 'Content-Type': 'application/json', Authorization: localStorage.getItem('jwtToken') } });
  }

  updatePrescriptionNotes(result):Observable<any>{
    const url = `${this.apiUrl}/api/prescription/updatePrescriptionNotes`
    return this.http.post(url, result, {
      headers: { 'Content-Type': 'application/json', Authorization: localStorage.getItem('jwtToken') }
    });
  }

  patientmedicalchart(patientId): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/medicalChart/getMedicalChart/${patientId}`,{} , {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('jwtToken'), // Include JWT token
      },
    });
  }

  updateMedicalChart(patientdata):Observable<any>{
    return this.http.post(`${this.apiUrl}/api/medicalChart/update`, patientdata , {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('jwtToken'), // Include JWT token
      },
    });
  }

}
