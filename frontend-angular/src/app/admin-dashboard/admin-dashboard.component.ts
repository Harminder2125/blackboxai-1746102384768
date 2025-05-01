import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
})
export class AdminDashboardComponent implements OnInit {
  sales: any[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.adminService.getSales().subscribe((data) => {
      this.sales = data;
    });
  }
}
