import { Injectable } from '@angular/core';
import { OrdenTrabajo } from '../interfaces/orden-trabajo';

@Injectable({
  providedIn: 'root',
})
export class OrdenTrabajoService {
  private apiUrl = 'http://localhost:3000/api/orden-trabajo';
  constructor() {}

  async crearOrdenTrabajo(orden: OrdenTrabajo): Promise<OrdenTrabajo> {
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orden),
    });

    const result = await response.json();

    if (response.ok) {
      console.log('Orden de trabajo creada:', result);
      alert(`Orden de trabajo creada con ID: ${result.id}`);
      return result;
    } else {
      console.error('Error al crear la orden:', result);
      alert(`Error: ${result.error}`);
      throw new Error(result.error);
    }
  }

  async listaOrdenTrabajo(): Promise<OrdenTrabajo[]> {
    const response = await fetch(this.apiUrl);

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }

    return await response.json();
  }
  async getOrdenesTrabajoFiltradas(activo: string, operario: string) {
    const params = new URLSearchParams();
    if (activo) params.append('activo', activo);
    if (operario) params.append('operario', operario);

    const response = await fetch(
      `http://localhost:3000/api/orden-trabajo-filtrada?${params.toString()}`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }
    );

    if (response.ok) {
      return await response.json();
    } else {
      console.error('Error al obtener las órdenes de trabajo filtradas');
      return [];
    }
  }
  async getOrdenesTrabajo() {
    try {
      const response = await fetch(
        'http://localhost:3000/api/orden-trabajo-detallada',
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        }
      );
      if (!response.ok) throw new Error('Failed to fetch ordenes de trabajo');
      return await response.json();
    } catch (error) {
      console.error('Error fetching ordenes de trabajo:', error);
      return [];
    }
  }
  async getOrdenesTrabajoPorOperario() {
    try {
      const response = await fetch(
        'http://localhost:3000/api/orden-trabajo/operario',
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        }
      );
      if (!response.ok)
        throw new Error('Failed to fetch ordenes de trabajo del operario');
      return await response.json();
    } catch (error) {
      console.error('Error fetching ordenes de trabajo del operario:', error);
      return [];
    }
  }
  async deleteOrdenTrabajo(id: number): Promise<OrdenTrabajo> {
    const response = await fetch(`${this.apiUrl}/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }

    return await response.json();
  }

  async updateOrdenTrabajo(
    id: number,
    ot: OrdenTrabajo
  ): Promise<OrdenTrabajo> {
    const response = await fetch(`${this.apiUrl}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ot),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }

    return await response.json();
  }
}
