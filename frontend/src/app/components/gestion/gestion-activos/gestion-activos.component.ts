import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-activos',
  standalone: true,
  imports: [],
  templateUrl: './gestion-activos.component.html',
  styleUrl: './gestion-activos.component.css',
})
export class GestionActivosComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/gestion']);
  }
}
