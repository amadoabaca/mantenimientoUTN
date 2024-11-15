import { Injectable } from '@angular/core';
import { Piso } from '../interfaces/piso';

@Injectable({
  providedIn: 'root',
})
export class PisoService {
  private apiUrl = 'http://localhost:3000/api/lista-pisos';

  constructor() {}

  async crearPiso(piso: Piso): Promise<Piso> {
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(piso),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }

    return await response.json();
  }

  async obtenerPisos(): Promise<Piso[]> {
    const response = await fetch(this.apiUrl);

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }

    return await response.json();
  }
}
