import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientDashboardComponent } from './components/patient-dashboard/patient-dashboard.component';
import { AppointmentHistoryComponent } from './components/appointment-history/appointment-history.component';
import { MedicalRecordsComponent } from './components/medical-records/medical-records.component';

const routes: Routes = [
  {
    path: '',
    component: PatientDashboardComponent,
    children: [
      { path: 'appointments', component: AppointmentHistoryComponent },
      { path: 'medical-records', component: MedicalRecordsComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }