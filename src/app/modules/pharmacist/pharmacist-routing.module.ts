import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PharmacistDashboardComponent } from './components/pharmacist-dashboard/pharmacist-dashboard.component';
import { PrescriptionViewComponent } from './components/prescription-view/prescription-view.component';
import { MedicineInventoryComponent } from './components/medicine-inventory/medicine-inventory.component';

const routes: Routes = [
  {
    path: '',
    component: PharmacistDashboardComponent,
    children: [
      { path: 'prescriptions', component: PrescriptionViewComponent },
      { path: 'inventory', component: MedicineInventoryComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmacistRoutingModule { }