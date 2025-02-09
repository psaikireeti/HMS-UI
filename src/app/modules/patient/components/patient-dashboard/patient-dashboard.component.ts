import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit {
  upcomingAppointments: any[] = [];
  recentPrescriptions: any[] = [];

  constructor(private patientService: PatientService) {}

  ngOnInit() {
    this.loadDashboardData();
  }

  private loadDashboardData() {
    this.patientService.getUpcomingAppointments().subscribe(
      appointments => this.upcomingAppointments = appointments,
      error => console.error('Error loading appointments:', error)
    );

    this.patientService.getRecentPrescriptions().subscribe(
      prescriptions => this.recentPrescriptions = prescriptions,
      error => console.error('Error loading prescriptions:', error)
    );
  }
}