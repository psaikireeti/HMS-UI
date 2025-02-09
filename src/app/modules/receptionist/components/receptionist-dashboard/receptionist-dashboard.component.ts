import { Component, OnInit } from '@angular/core';
import { ReceptionistService } from '../../services/receptionist.service';

@Component({
  selector: 'app-receptionist-dashboard',
  templateUrl: './receptionist-dashboard.component.html',
  styleUrls: ['./receptionist-dashboard.component.css']
})
export class ReceptionistDashboardComponent implements OnInit {
  todayAppointments: any[] = [];
  recentPatients: any[] = [];

  constructor(private receptionistService: ReceptionistService) {}

  ngOnInit() {
    this.loadDashboardData();
  }

  private loadDashboardData() {
    this.receptionistService.getTodayAppointments().subscribe(
      appointments => this.todayAppointments = appointments,
      error => console.error('Error loading appointments:', error)
    );

    this.receptionistService.getRecentPatients().subscribe(
      patients => this.recentPatients = patients,
      error => console.error('Error loading patients:', error)
    );
  }
}