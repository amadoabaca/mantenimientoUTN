import { Injectable } from '@angular/core';
import { Edificio } from '../interfaces/edificio';

@Injectable({
  providedIn: 'root'
})
export class EdificioService {
  private apiUrl = 'http://localhost:3000/api/lista-edificios'; 
  
  constructor() {}

  async crearEdificio(edificio: Edificio): Promise<Edificio> {
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(edificio),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }

    return await response.json();
  }

  
  async obtenerEdificios(): Promise<Edificio[]> {
    const response = await fetch(this.apiUrl);

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }

    return await response.json();
  }
}