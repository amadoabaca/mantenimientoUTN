import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdenTrabajoService } from '../../services/orden-trabajo.service';
import { OrdenTrabajo } from '../../interfaces/orden-trabajo';

@Component({
  selector: 'app-orden-trabajo-detalle',
  templateUrl: './orden-trabajo.component.html',
  styleUrls: ['./orden-trabajo.component.css'],
})
export class OrdenTrabajoDetalleComponent implements OnInit {
  ordenTrabajo!: OrdenTrabajo;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ordenTrabajoService: OrdenTrabajoService
  ) {}

  async ngOnInit(): Promise<void> {
    const id = +this.route.snapshot.paramMap.get('id')!;
    try {
      this.ordenTrabajo = await this.ordenTrabajoService.getOrdenTrabajo(id);
      console.log('Orden de trabajo cargada:', this.ordenTrabajo);
    } catch (error) {
      console.error('Error al obtener la orden de trabajo:', error);
    }
  }

  obtenerOrdenTrabajo(id: number) {
    this.ordenTrabajoService.getOrdenTrabajo(id).then((data) => {
      this.ordenTrabajo = data;
    });
  }

  goBack() {
    this.router.navigate(['/dashboard-operario']);
  }
}
