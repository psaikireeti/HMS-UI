import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReceptionistService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getTodayAppointments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/appointments/today`);
  }

  getRecentPatients(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/patients/recent`);
  }

  registerPatient(patientData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/patients`, patientData);
  }

  bookAppointment(appointmentData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/appointments`, appointmentData);
  }
}