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
}
