import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivoTarea } from '../interfaces/activo-tarea';

@Injectable({
  providedIn: 'root'
})
export class ActivoTareaService {
  private apiUrl = 'http://localhost:3000/api/activo-tarea';

  constructor(private http: HttpClient) {}


  async crearActivoTarea(activoTarea: ActivoTarea): Promise<ActivoTarea> {
    try {
      const response = await this.http.post<ActivoTarea>(this.apiUrl, activoTarea).toPromise();
      if (!response) {
        throw new Error('No se pudo crear la relación activo-tarea');
      }
      return response; 
    } catch (error) {
      console.error('Error al crear activo-tarea:', error);
      throw error; 
    }
  }

  
  async obtenerActivosTarea(): Promise<ActivoTarea[]> {
    try {
      const response = await this.http.get<ActivoTarea[]>(this.apiUrl).toPromise();
      if (!response) {
        throw new Error('No se encontraron relaciones activo-tarea');
      }
      return response;
    } catch (error) {
      console.error('Error al obtener activos-tarea:', error);
      throw error; 
    }
  }
}
