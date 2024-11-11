export interface OrdenTrabajo {
  orden_trabajo_id: number;
  operario: string;
  nombre: string;
  fecha: string;
  sector: string;
  edificio: number;
  activo: string;
  activo_tipo?: string;
  ubicacion: string;
  piso: number;
  tipoActivo: string;
  solicitante: string;
  instrucciones: string;
  activo_tarea: string;
  activo_tag?: string;
  edificio_nombre?: string;
  piso_nombre?: string;
  sector_nombre?: string;
  ubicacion_nombre?: string;
  numero_tipo?: number;
}
