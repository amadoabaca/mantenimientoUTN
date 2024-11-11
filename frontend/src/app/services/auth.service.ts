        import { Injectable } from '@angular/core';
        import { Router } from '@angular/router';

        @Injectable({
          providedIn: 'root'
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
      localStorage.setItem('token', res.token);
      localStorage.setItem('area', res.area); 
      return res;
    } else {
      throw new Error('Token not received');
    }
  } catch (error) {
    console.error('Error in login:', error);
    return null;
  }
}


          async register(data: any) {
            try {
              const response = await fetch('http://localhost:3000/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
              });
              if (!response.ok) throw new Error('Register failed');
              return await response.json();
            } catch (error) {
              console.error('Error in register:', error);
            }
          }
          isAuthenticated(): boolean {
            const token = localStorage.getItem('token');
            return !!token;
          }

getUserArea(): string | null {
  return localStorage.getItem('area'); 
}
          logout() {
            localStorage.removeItem('token');
            this.isLoggedIn = false;
            this.router.navigate(['/login']);
          }
        }
