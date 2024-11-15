import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = false;

  constructor(private router: Router) {}

  async login(credentials: { email: string; contraseña: string }) {
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      const res = await response.json();
      if (res.token) {
        this.setCookie('token', res.token, 1);

        const payload = JSON.parse(atob(res.token.split('.')[1]));
        if (payload.area) {
          this.setCookie('area', payload.area, 1);
          return res;
        } else {
          throw new Error('Área no encontrada en el token');
        }
      } else {
        throw new Error('Token no recibido');
      }
    } catch (error) {
      console.error('Error en login:', error);
      return null;
    }
  }

  isAuthenticated(): boolean {
    const token = this.getCookie('token');
    return !!token;
  }

  getUserArea(): string | null {
    return this.getCookie('area');
  }

  logout() {
    this.deleteCookie('token');
    this.deleteCookie('area');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  private setCookie(name: string, value: string, days: number) {
    if (typeof document !== 'undefined') {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      const expires = `; expires=${date.toUTCString()}`;
      document.cookie = `${name}=${value || ''}${expires}; path=/`;
    }
  }

  private getCookie(name: string): string | null {
    if (typeof document !== 'undefined') {
      const match = document.cookie.match(
        new RegExp('(^| )' + name + '=([^;]+)')
      );
      return match ? match[2] : null;
    }
    return null;
  }

  private deleteCookie(name: string) {
    this.setCookie(name, '', -1);
  }
}
