import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceptionistDashboardComponent } from './components/receptionist-dashboard/receptionist-dashboard.component';
import { PatientRegistrationComponent } from './components/patient-registration/patient-registration.component';
import { AppointmentBookingComponent } from './components/appointment-booking/appointment-booking.component';

const routes: Routes = [
  {
    path: '',
    component: ReceptionistDashboardComponent,
    children: [
      { path: 'patient-registration', component: PatientRegistrationComponent },
      { path: 'appointment-booking', component: AppointmentBookingComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceptionistRoutingModule { }