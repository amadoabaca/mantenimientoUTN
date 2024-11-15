import { Injectable } from '@angular/core';
import { Edificio } from '../interfaces/edificio';

@Injectable({
  providedIn: 'root',
})
export class EdificioService {
  private apiUrl = 'http://localhost:3000/api';

  constructor() {}

  async obtenerEdificios(): Promise<Edificio[]> {
    const response = await fetch(`${this.apiUrl}/lista-edificios`);
    if (!response.ok) {
      throw new Error('Error al obtener los edificios');
    }
    return await response.json();
  }

  async createEdificio(
    edificio: Omit<Edificio, 'id_edificio'>
  ): Promise<Edificio> {
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(edificio),
    });
    if (!response.ok) {
      throw new Error('Error al crear el edificio');
    }
    return await response.json();
  }

  async deleteEdificio(id: number): Promise<void> {
    const response = await fetch(`${this.apiUrl}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Error al eliminar el edificio');
    }
  }
}
