import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/login';

  async login(email: string, password: string) {
    const response = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, contraseña: password }), 
    });
  
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  
    return await response.json();
  } }
