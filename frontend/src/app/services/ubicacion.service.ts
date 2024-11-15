import { Injectable } from '@angular/core';
import { UbicacionActivo } from '../interfaces/ubicacion';

@Injectable({
  providedIn: 'root',
})
export class UbicacionService {
  private apiUrl = 'http://localhost:3000/api/lista-ubi-activos';

  constructor() {}

  async crearUbicacion(ubicacion: UbicacionActivo): Promise<UbicacionActivo> {
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ubicacion),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(
        errorResponse.error || 'Error al crear la ubicación de activo'
      );
    }

    return await response.json();
  }

  async obtenerUbicaciones(): Promise<UbicacionActivo[]> {
    const response = await fetch(this.apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(
        errorResponse.error || 'Error al obtener ubicaciones de activos'
      );
    }

    return await response.json();
  }
}
