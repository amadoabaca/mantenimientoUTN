import { Injectable } from '@angular/core';
import { Sector } from '../interfaces/sector';

@Injectable({
  providedIn: 'root'
})
export class SectorService {

  private apiUrl = 'http://localhost:3000/api/sectores'; 

  constructor() {}

  async crearSector(sector: Sector): Promise<Sector> {
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sector),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.error || 'Error al crear el sector');
    }

    return await response.json();
  }

  
  async obtenerSectores(): Promise<Sector[]> {
    const response = await fetch(this.apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.error || 'Error al obtener sectores');
    }

    return await response.json();
  }
}
