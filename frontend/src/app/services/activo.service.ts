import { Injectable } from '@angular/core';
import { Activo } from '../interfaces/activo';

@Injectable({
  providedIn: 'root'
})
export class ActivoService {

  private apiUrl = 'http://localhost:3000/api/activos';

  constructor() {}


  async obtenerActivos(): Promise<Activo[]> {
    const response = await fetch(this.apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.error || 'Error al obtener activos');
    }

    return await response.json();
  }
  async crearActivo(activo: Activo): Promise<Activo> {
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(activo),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.error || 'Error al crear activo');
    }

    return await response.json();
  }
}

