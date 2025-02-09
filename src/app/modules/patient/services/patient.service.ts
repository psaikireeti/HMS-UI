import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUpcomingAppointments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/appointments/upcoming`);
  }

  getRecentPrescriptions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/prescriptions/recent`);
  }

  getMedicalRecords(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/medical-records`);
  }

  getAppointmentHistory(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/appointments/history`);
  }
}