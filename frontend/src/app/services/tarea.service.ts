import { Injectable } from '@angular/core';
import { Tarea } from '../interfaces/tarea';

@Injectable({
  providedIn: 'root',
})
export class TareaService {
  private apiUrl = 'http://localhost:3000/api/tareas';

  constructor() {}

  async crearTarea(tarea: Tarea): Promise<Tarea> {
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tarea),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }

    return await response.json();
  }

  async obtenerTareas(): Promise<Tarea[]> {
    const response = await fetch(this.apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }

    return await response.json();
  }
}
