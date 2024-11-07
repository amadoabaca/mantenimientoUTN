import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnInit {
  imageUrl: string | null = null;
  role: string | null = null; 
  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService 
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.imageUrl = params['image'];
      this.role = params['role'];
    });
  }

  goBack() {
    this.router.navigate(['/login']);
  }

  async onLogin() {
    if (!this.email || !this.password) {
      console.error('Email y contraseña son requeridos');
      return; 
    }

    try {
      const response = await this.authService.login(this.email, this.password);
      console.log('Inicio de sesión exitoso:', response);
      if (response && response.area) {
        this.navigateToDashboard(response.area); 
      } else {
        console.error('No se recibió el área del usuario');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  }

  navigateToDashboard(area: string) {
    if (area === 'administrativo') {
      this.router.navigate(['/dashboard-admin']);
    } else if (area === 'operario') {
      this.router.navigate(['/dashboard-operario']);
    } else {
      this.router.navigate(['/']);
    }
  }
}
