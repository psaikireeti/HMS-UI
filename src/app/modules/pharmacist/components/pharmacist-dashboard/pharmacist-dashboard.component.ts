import { Component, OnInit } from '@angular/core';
import { PharmacistService } from '../../services/pharmacist.service';

@Component({
  selector: 'app-pharmacist-dashboard',
  templateUrl: './pharmacist-dashboard.component.html',
  styleUrls: ['./pharmacist-dashboard.component.css']
})
export class PharmacistDashboardComponent implements OnInit {
  pendingPrescriptions: any[] = [];
  lowStockMedicines: any[] = [];

  constructor(private pharmacistService: PharmacistService) {}

  ngOnInit() {
    this.loadDashboardData();
  }

  private loadDashboardData() {
    this.pharmacistService.getPendingPrescriptions().subscribe(
      prescriptions => this.pendingPrescriptions = prescriptions,
      error => console.error('Error loading prescriptions:', error)
    );

    this.pharmacistService.getLowStockMedicines().subscribe(
      medicines => this.lowStockMedicines = medicines,
      error => console.error('Error loading low stock medicines:', error)
    );
  }
}