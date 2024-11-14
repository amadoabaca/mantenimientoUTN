import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion',
  standalone: true,
  imports: [],
  templateUrl: './gestion.component.html',
  styleUrl: './gestion.component.css',
})
export class GestionComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/dashboard-admin']);
  }

  navigateToActivos() {
    this.router.navigate(['/gestion-activos']);
  }

  navigateToPisos() {
    this.router.navigate(['/gestion-pisos']);
  }

  navigateToEdificios() {
    this.router.navigate(['/gestion-edificios']);
  }

  navigateToSectores() {
    this.router.navigate(['/gestion-sectores']);
  }

  navigateToUbicaciones() {
    this.router.navigate(['/gestion-ubicaciones']);
  }
}
