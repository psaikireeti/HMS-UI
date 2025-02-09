import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css']
})
export class DoctorDashboardComponent implements OnInit {
  todayAppointments: any[] = [];
  upcomingAppointments: any[] = [];

  constructor(private doctorService: DoctorService) {}

  ngOnInit() {
    this.loadAppointments();
  }

  private loadAppointments() {
    this.doctorService.getTodayAppointments().subscribe(
      appointments => this.todayAppointments = appointments,
      error => console.error('Error loading today\'s appointments:', error)
    );

    this.doctorService.getUpcomingAppointments().subscribe(
      appointments => this.upcomingAppointments = appointments,
      error => console.error('Error loading upcoming appointments:', error)
    );
  }
}