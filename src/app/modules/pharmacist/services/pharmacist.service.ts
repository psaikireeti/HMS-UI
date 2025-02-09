import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PharmacistService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPendingPrescriptions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/prescriptions/pending`);
  }

  getLowStockMedicines(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/medicines/low-stock`);
  }

  updateMedicineStock(medicineId: number, quantity: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/medicines/${medicineId}`, { quantity });
  }

  dispenseMedicine(prescriptionId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/prescriptions/${prescriptionId}/dispense`, {});
  }
}