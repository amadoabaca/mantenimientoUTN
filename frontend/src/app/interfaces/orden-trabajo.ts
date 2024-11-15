export interface OrdenTrabajo {
  id: number;
  operario: string;
  sector: string;
  edificio: string;
  ubicacion: string;
  piso: string;
  id_activo_tarea: string;
  id_activo?: string;
}
