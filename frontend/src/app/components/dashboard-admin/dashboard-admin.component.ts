import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-admin',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-admin.component.html',
  styleUrl: './dashboard-admin.component.css'
})
export class DashboardAdminComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/anterior-componente']);
  }

  navigateToOT() {
    this.router.navigate(['/orden-trabajo']);
  }

  navigateToSolicitud() {
    this.router.navigate(['/orden-trabajo-form']);
  }

  navigateToRegistro() {
    this.router.navigate(['/registro']);
  }
}


