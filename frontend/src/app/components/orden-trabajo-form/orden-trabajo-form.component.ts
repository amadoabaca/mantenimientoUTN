import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ActivoTareaService } from '../../services/activo-tarea.service';
import { UserService } from '../../services/user.service';
import { UbicacionService } from '../../services/ubicacion.service';
import { TareaService } from '../../services/tarea.service';
import { SectorService } from '../../services/sector.service';
import { PisoService } from '../../services/piso.service';
import { EdificioService } from '../../services/edificio.service';
import { OrdenTrabajoService } from '../../services/orden-trabajo.service';
import { OrdenTrabajo } from '../../interfaces/orden-trabajo';
import { CommonModule } from '@angular/common';
import { ActivoTarea} from '../../interfaces/activo-tarea'  

@Component({
  selector: 'app-orden-trabajo-form',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './orden-trabajo-form.component.html',
  styleUrls: ['./orden-trabajo-form.component.css']
})
export class OrdenTrabajoFormComponent implements OnInit {
  ordenTrabajo: OrdenTrabajo = {
    id: 0,
    operario: '',
    edificio: 0,
    piso: 0,
    sector: '',
    ubicacion: '',
    activo: '',
    nombre: '',
    fecha: '',
    tipoActivo: '',
    solicitante: '',
    instrucciones: '',
    activo_tarea: ''
  };

  operarios: any[] = [];
  edificios: any[] = [];
  pisos: any[] = [];
  sectores: any[] = [];
  ubicaciones: any[] = [];
  activos: any[] = [];
  tarea: any[] = [];
  relaciones: ActivoTarea[] = [];

  constructor(
    private router: Router,
    private activoTareaService: ActivoTareaService, 
    private userService: UserService,
    private ubicacionService: UbicacionService,
    private tareaService: TareaService,
    private sectorService: SectorService,
    private pisoService: PisoService,
    private edificioService: EdificioService,
    private ordenTrabajoService: OrdenTrabajoService
  ) {}

  async ngOnInit(): Promise<void> {
    try {
      await this.obtenerDatos();
      console.log('Tareas obtenidas:', this.tarea); 
    } catch (error) {
      console.error('Error en ngOnInit:', error);
    }
  }

  private async obtenerDatos(): Promise<void> {
    await Promise.all([
      this.obtenerEdificios(),
      this.obtenerPisos(),
      this.obtenerSectores(),
      this.obtenerUbicaciones(),
      this.obtenerActivosConTareas()
    ]);
  }

  goBack() {
    this.router.navigate(['/dashboard-admin']);
  }

  async obtenerEdificios(): Promise<void> {
    try {
      this.edificios = await this.edificioService.obtenerEdificios(); 
    } catch (error) {
      console.error('Error al obtener edificios:', error);
      this.edificios = []; 
    }
  }

  async obtenerPisos(): Promise<void> {
    try {
      this.pisos = await this.pisoService.obtenerPisos(); 
    } catch (error) {
      console.error('Error al obtener pisos:', error);
      this.pisos = []; 
    }
  }

  async obtenerSectores(): Promise<void> {
    try {
      this.sectores = await this.sectorService.obtenerSectores();
    } catch (error) {
      console.error('Error al obtener sectores:', error);
      this.sectores = []; 
    }
  }

  async obtenerUbicaciones(): Promise<void> {
    try {
      this.ubicaciones = await this.ubicacionService.obtenerUbicaciones();
    } catch (error) {
      console.error('Error al obtener ubicaciones:', error);
      this.ubicaciones = []; 
    }
  }

  async obtenerActivosConTareas(): Promise<void> {
    try {
        const relaciones = await this.activoTareaService.obtenerActivosTarea();
        console.log('Relaciones obtenidas:', relaciones); 

        if (!relaciones || relaciones.length === 0) {
            throw new Error('No hay relaciones activo-tarea disponibles');
        }

        const activosConTareas: any[] = [];
        relaciones.forEach(rel => {
            const existente = activosConTareas.find(act => act.tipo === rel.tipo);

            if (existente) {
                existente.tareas.push({ tarea: rel.tarea, id_tarea: rel.id_tarea });
            } else {
                activosConTareas.push({
                    tipo: rel.tipo,
                    tareas: [{ tarea: rel.tarea, id_tarea: rel.id_tarea }]
                });
            }
        });

        this.activos = activosConTareas;
        console.log('Activos con tareas:', this.activos); 
    } catch (error) {
        console.error('Error al obtener activos con tareas:', error);
        this.activos = [];
    }
}


getUniqueEdificios() {
  const unique = new Set(this.edificios.map(edificio => edificio.nombre));
  return Array.from(unique).map(nombre => 
    this.edificios.find(edificio => edificio.nombre === nombre)
  );
}

getUniquePisos() {
  const unique = new Set(this.pisos.map(piso => piso.piso));
  return Array.from(unique).map(piso => 
    this.pisos.find(p => p.piso === piso)
  );
}

getUniqueSectores() {
  const unique = new Set(this.sectores.map(sector => sector.sector));
  return Array.from(unique).map(sector => 
    this.sectores.find(s => s.sector === sector)
  );
}

getUniqueUbicaciones() {
  const unique = new Set(this.ubicaciones.map(ubicacion => ubicacion.ubicacion));
  return Array.from(unique).map(ubicacion => 
    this.ubicaciones.find(u => u.ubicacion === ubicacion)
  );
}

onActivoChange(event: Event) {
  const selectedTipo = (event.target as HTMLSelectElement).value;
  const activoSeleccionado = this.activos.find(activo => activo.tipo === selectedTipo);

  if (activoSeleccionado) {
      this.tarea = activoSeleccionado.tareas; 
      this.ordenTrabajo.activo_tarea = ''; 
      console.log('Tareas para el activo seleccionado:', this.tarea);
  }
}
onTareaChange(event: Event) {
const selectedTareaId = (event.target as HTMLSelectElement).value; 
console.log('Tarea seleccionada:', selectedTareaId); 

this.ordenTrabajo.activo_tarea = selectedTareaId; 
}
async enviarSolicitud(): Promise<void> {
console.log('ID activo tarea antes de enviar:', this.ordenTrabajo.activo_tarea);
console.log('Datos a enviar:', this.ordenTrabajo);

if (!this.ordenTrabajo.activo_tarea) {
    console.error('No se ha seleccionado ninguna tarea.'); 
    return; 
}

try {
    const response = await this.ordenTrabajoService.crearOrdenTrabajo(this.ordenTrabajo);
    console.log('Orden de trabajo creada:', response);
    this.router.navigate(['/dashboard-admin']);
} catch (error) {
    console.error('Error al crear la orden de trabajo:', error);
}
}

onEdificioChange(event: any) {
  this.ordenTrabajo.edificio = Number(event.target.value);
}

onPisoChange(event: any) {
  this.ordenTrabajo.piso = Number(event.target.value);
}

onSectorChange(event: any) {
  this.ordenTrabajo.sector = String(event.target.value);
}

onUbicacionChange(event: any) {
  this.ordenTrabajo.ubicacion = String(event.target.value);
}
}