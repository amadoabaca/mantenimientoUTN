import { Injectable } from '@angular/core';
import { ActivoTarea } from '../interfaces/activo-tarea';
@Injectable({
  providedIn: 'root',
})
export class ActivoTareaService {
  private apiUrl = 'http://localhost:3000/api/activoTareas';

  constructor() {}

  async crearActivoTarea(activoTarea: ActivoTarea): Promise<ActivoTarea> {
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(activoTarea),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(
        errorResponse.error || 'No se pudo crear la relación activo-tarea'
      );
    }

    return await response.json();
  }

  async obtenerTareas(
    idActivo?: string,
    tipoActivo?: string
  ): Promise<ActivoTarea[]> {
    let url = this.apiUrl;

    if (idActivo) {
      url = `${this.apiUrl}/${idActivo}`;
    } else if (tipoActivo) {
      url = `${this.apiUrl}?tipo_activo=${tipoActivo}`;
    }

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      console.error(
        'Error al obtener las relaciones Activo-Tarea:',
        errorResponse
      );
      throw new Error(
        errorResponse.error ||
          'No se pudieron obtener las relaciones Activo-Tarea'
      );
    }

    return await response.json();
  }
}
