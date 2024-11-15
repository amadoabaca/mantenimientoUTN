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
import { User } from '../../interfaces/user';
import { Tarea } from '../../interfaces/tarea';
import { Edificio } from '../../interfaces/edificio';
import { Piso } from '../../interfaces/piso';
import { Sector } from '../../interfaces/sector';
import { UbicacionActivo } from '../../interfaces/ubicacion';

@Component({
  selector: 'app-orden-trabajo-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './orden-trabajo-form.component.html',
  styleUrls: ['./orden-trabajo-form.component.css'],
})
export class OrdenTrabajoFormComponent implements OnInit {
  ordenTrabajo: OrdenTrabajo = {
    id: 0,
    operario: '',
    edificio: '',
    piso: '',
    sector: '',
    ubicacion: '',
    id_activo_tarea: '',
  };

  activos: ActivoTarea[] = [];
  tarea: Tarea[] = [];
  operario: User[] = [];
  edificio: Edificio[] = [];
  piso: Piso[] = [];
  sector: Sector[] = [];
  ubicacion: UbicacionActivo[] = [];
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
      await this.obtenerOperarios();
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
      this.obtenerActivos(),
    ]);
  }

  goBack() {
    this.router.navigate(['/dashboard-admin']);
  }

  async obtenerOperarios(): Promise<void> {
    try {
      this.operario = await this.userService.getOperarios();
    } catch (error) {
      console.error('Error al obtener operarios:', error);
      this.operario = [];
    }
  }

  onOperarioChange(event: Event) {
    const selectedOperario = (event.target as HTMLSelectElement).value;
    this.ordenTrabajo.operario = selectedOperario;
  }

  async obtenerEdificios(): Promise<void> {
    try {
      this.edificio = await this.edificioService.obtenerEdificios();
    } catch (error) {
      console.error('Error al obtener edificios:', error);
      this.edificio = [];
    }
  }

  async obtenerPisos(): Promise<void> {
    try {
      this.piso = await this.pisoService.obtenerPisos();
    } catch (error) {
      console.error('Error al obtener pisos:', error);
      this.piso = [];
    }
  }

  async obtenerSectores(): Promise<void> {
    try {
      this.sector = await this.sectorService.obtenerSectores();
    } catch (error) {
      console.error('Error al obtener sectores:', error);
      this.sector = [];
    }
  }

  async obtenerUbicaciones(): Promise<void> {
    try {
      this.ubicacion = await this.ubicacionService.obtenerUbicaciones();
    } catch (error) {
      console.error('Error al obtener ubicaciones:', error);
      this.ubicacion = [];
    }
  }

  async obtenerActivos(): Promise<void> {
    try {
      const activos = await this.activoService.obtenerActivos();
      this.activos = activos.map((activo) => ({
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

  getUniqueEdificios(): Edificio[] {
    const uniqueNames = new Set(
      this.edificio.map((edificio) => edificio.nombre)
    );
    return Array.from(uniqueNames).map(
      (nombre) =>
        this.edificio.find((edificio) => edificio.nombre === nombre) as Edificio
    );
  }

  getUniquePisos(): Piso[] {
    const uniquePisos = new Set(this.piso.map((piso) => piso.piso));
    return Array.from(uniquePisos).map(
      (piso) => this.piso.find((p) => p.piso === piso) as Piso
    );
  }

  getUniqueSectores(): Sector[] {
    const uniqueSectores = new Set(this.sector.map((sector) => sector.sector));
    return Array.from(uniqueSectores).map(
      (sector) => this.sector.find((s) => s.sector === sector) as Sector
    );
  }

  getUniqueUbicaciones(): UbicacionActivo[] {
    const uniqueUbicaciones = new Set(
      this.ubicacion.map((ubicacion) => ubicacion.ubicacion)
    );
    return Array.from(uniqueUbicaciones).map(
      (ubicacion) =>
        this.ubicacion.find((u) => u.ubicacion === ubicacion) as UbicacionActivo
    );
  }

  async onActivoChange(event: Event): Promise<void> {
    const selectedActivoId = (event.target as HTMLSelectElement).value;

    if (selectedActivoId) {
      try {
        const tareasParaActivo = await this.activoTareaService.obtenerTareas(
          selectedActivoId
        );
        this.tarea = tareasParaActivo;

        if (this.tarea.length > 0) {
          this.ordenTrabajo.id_activo_tarea = this.tarea[0].id_tarea.toString();
        } else {
          this.ordenTrabajo.id_activo_tarea = '';
        }
      } catch (error) {
        console.error('Error al obtener tareas del activo:', error);
        this.tarea = [];
        this.ordenTrabajo.id_activo_tarea = '';
      }
    } else {
      this.tarea = [];
      this.ordenTrabajo.id_activo_tarea = '';
    }
  }

  onTareaChange(event: Event) {
    const selectedTareaId = (event.target as HTMLSelectElement).value;
    this.ordenTrabajo.id_activo_tarea = selectedTareaId;
  }

  async enviarSolicitud(): Promise<void> {
    try {
      const response = await this.ordenTrabajoService.crearOrdenTrabajo(
        this.ordenTrabajo
      );
      console.log('Orden de trabajo creada:', response);
      this.router.navigate(['/dashboard-admin']);
    } catch (error) {
      console.error('Error al crear la orden de trabajo:', error);
    }
  }

  onEdificioChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.ordenTrabajo.edificio = selectedValue;
  }

  onPisoChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.ordenTrabajo.piso = selectedValue;
  }

  onSectorChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.ordenTrabajo.sector = selectedValue;
  }

  onUbicacionChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.ordenTrabajo.ubicacion = selectedValue;
  }
}
