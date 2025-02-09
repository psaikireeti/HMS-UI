import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getTodayAppointments(): Observable<any[]> {
    // Replace with actual API endpoint
    return of([
      { patientName: 'John Doe', time: new Date().setHours(10, 0) },
      { patientName: 'Jane Smith', time: new Date().setHours(11, 30) },
      { patientName: 'Bob Johnson', time: new Date().setHours(14, 15) }
    ]);
  }

  getUpcomingAppointments(): Observable<any[]> {
    // Replace with actual API endpoint
    return of([
      { patientName: 'Alice Brown', date: new Date(Date.now() + 86400000) },
      { patientName: 'Charlie Wilson', date: new Date(Date.now() + 172800000) },
      { patientName: 'David Miller', date: new Date(Date.now() + 259200000) }
    ]);
  }

  createPrescription(prescription: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/doctor/prescriptions`, prescription);
  }

  updatePrescription(id: number, prescription: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/doctor/prescriptions/${id}`, prescription);
  }

  getPrescriptions(patientId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/doctor/prescriptions/patient/${patientId}`);
  }
}