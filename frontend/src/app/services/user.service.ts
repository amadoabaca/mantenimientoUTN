import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000/api'; 

  constructor() { }

  async obtenerOperarios(): Promise<User[]> {
    const response = await fetch(`${this.apiUrl}/lista-usuarios`);
    if (!response.ok) {
      throw new Error('Error al obtener operarios');
    }
    return response.json();
  }

  
  async registrarOperario(userData: { nombre: string; area: string; contraseña: string; email: string; apellido: string }): Promise<any> {
    const response = await fetch(`${this.apiUrl}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json(); 
      throw new Error('Error al registrar operario');
    
    }
    return response.json();
  }

  
  async login(credentials: { nombre: string; contraseña: string }): Promise<any> {
    const response = await fetch(`${this.apiUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Error al iniciar sesión');
    }
    return response.json();
  }

}
