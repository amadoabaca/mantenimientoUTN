import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdenTrabajoService } from '../../services/orden-trabajo.service';
import { OrdenTrabajo } from '../../interfaces/orden-trabajo';

@Component({
  selector: 'app-orden-trabajo-detalle',
  templateUrl: './orden-trabajo.component.html',
  styleUrls: ['./orden-trabajo.component.css']
})
export class OrdenTrabajoDetalleComponent implements OnInit {
  ordenTrabajo!: OrdenTrabajo;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ordenTrabajoService: OrdenTrabajoService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (id) {
        this.obtenerOrdenTrabajo(id);
      }
    });
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