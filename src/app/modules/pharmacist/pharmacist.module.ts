import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { PharmacistDashboardComponent } from './components/pharmacist-dashboard/pharmacist-dashboard.component';
import { PrescriptionViewComponent } from './components/prescription-view/prescription-view.component';
import { MedicineInventoryComponent } from './components/medicine-inventory/medicine-inventory.component';
import { PharmacistRoutingModule } from './pharmacist-routing.module';

@NgModule({
  declarations: [
    PharmacistDashboardComponent,
    PrescriptionViewComponent,
    MedicineInventoryComponent
  ],
  imports: [
    CommonModule,
    PharmacistRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class PharmacistModule { }