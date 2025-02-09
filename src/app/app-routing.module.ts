import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard],
    data: { role: 'ROLE_ADMIN' }
  },
  {
    path: 'doctor',
    loadChildren: () => import('./modules/doctor/doctor.module').then(m => m.DoctorModule),
    canActivate: [AuthGuard],
    data: { role: 'ROLE_DOCTOR' }
  },
  {
    path: 'receptionist',
    loadChildren: () => import('./modules/receptionist/receptionist.module').then(m => m.ReceptionistModule),
    canActivate: [AuthGuard],
    data: { role: 'ROLE_RECEPTIONIST' }
  },
  {
    path: 'pharmacist',
    loadChildren: () => import('./modules/pharmacist/pharmacist.module').then(m => m.PharmacistModule),
    canActivate: [AuthGuard],
    data: { role: 'ROLE_PHARMACIST' }
  },
  {
    path: 'patient',
    loadChildren: () => import('./modules/patient/patient.module').then(m => m.PatientModule),
    canActivate: [AuthGuard],
    data: { role: 'ROLE_PATIENT' }
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }