import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorDashboardComponent } from './components/doctor-dashboard/doctor-dashboard.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { PrescriptionsComponent } from './components/prescriptions/prescriptions.component';

const routes: Routes = [
  {
    path: '',
    component: DoctorDashboardComponent,
    children: [
      { path: 'appointments', component: AppointmentsComponent },
      { path: 'prescriptions', component: PrescriptionsComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }