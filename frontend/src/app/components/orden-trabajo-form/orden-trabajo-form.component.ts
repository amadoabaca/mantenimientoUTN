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
import { ActivoService } from '../../services/activo.service';
import { CommonModule } from '@angular/common';
import { ActivoTarea } from '../../interfaces/activo-tarea';

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
    edificio: '',
    piso: '',
    sector: '',
    ubicacion: '',
    activo_tarea: []  // Array donde se almacenarán las tareas seleccionadas
  };

  activos: ActivoTarea[] = [];  // Aquí almacenaremos los activos
  tarea: any[] = [];  // Tareas asociadas al activo seleccionado
  operarios: any[] = [];
  edificios: any[] = [];
  pisos: any[] = [];
  sectores: any[] = [];
  ubicaciones: any[] = [];
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
    private ordenTrabajoService: OrdenTrabajoService,
    private activoService: ActivoService
  ) {}

  async ngOnInit(): Promise<void> {
    try {
      await this.obtenerDatos();
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
      this.obtenerActivos()  
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

  async obtenerActivos(): Promise<void> {
    try {

      const activos = await this.activoService.obtenerActivos(); 

      this.activos = activos.map(activo => ({
        id_activo: activo.id_activo,
        tipo: activo.tipo,

        id_tarea: '', 
        tarea: '',
      }));
  
    } catch (error) {
      console.error('Error al obtener activos:', error);
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

async onActivoChange(event: Event): Promise<void> {
  const selectedActivoId = (event.target as HTMLSelectElement).value;

  if (selectedActivoId) {
    try {

      const tareasParaActivo = await this.activoTareaService.obtenerTareas(selectedActivoId);

     
      this.tarea = tareasParaActivo;

      console.log('Tareas para el activo seleccionado:', this.tarea);

      const tareasUnicas = Array.from(new Set(this.tarea.map(tarea => `${selectedActivoId}-${tarea.id_tarea}`)));

 
      this.ordenTrabajo.activo_tarea = tareasUnicas;

      console.log('Formato de tareas para enviar al backend (sin duplicados):', this.ordenTrabajo.activo_tarea);
      
    } catch (error) {
      console.error('Error al obtener tareas del activo:', error);
      this.tarea = []; 
    }
  } else {
    this.tarea = [];  
    this.ordenTrabajo.activo_tarea = []; 
  }
}
  onTareaChange(event: Event) {
    const selectedTareas = Array.from((event.target as HTMLSelectElement).selectedOptions)
      .map(option => option.value);

    this.ordenTrabajo.activo_tarea = selectedTareas;  
  }

  async enviarSolicitud(): Promise<void> {
   

    try {
   
      this.ordenTrabajo.id_activo = this.ordenTrabajo.activo_tarea[0];  
      const response = await this.ordenTrabajoService.crearOrdenTrabajo(this.ordenTrabajo);
      console.log('Orden de trabajo creada:', response);
      this.router.navigate(['/dashboard-admin']);
    } catch (error) {
      console.error('Error al crear la orden de trabajo:', error);
    }
  }


  onEdificioChange(event: any) {
    this.ordenTrabajo.edificio = String(event.target.value);
  }

  onPisoChange(event: any) {
    this.ordenTrabajo.piso = String(event.target.value);
  }

  onSectorChange(event: any) {
    this.ordenTrabajo.sector = String(event.target.value);
  }

  onUbicacionChange(event: any) {
    this.ordenTrabajo.ubicacion = String(event.target.value);
  }
}
