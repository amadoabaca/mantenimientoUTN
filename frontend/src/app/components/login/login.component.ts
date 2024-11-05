import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {}

  navigateToLoginForm(role: string, imagePath: string) {
    this.router.navigate(['/login-form'], { queryParams: {role, image: imagePath } });
  }
}
