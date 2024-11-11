import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdenTrabajoService } from '../../services/orden-trabajo.service';
import { OrdenTrabajo } from '../../interfaces/orden-trabajo';
import { DashboardAdminComponent } from '../dashboard-admin/dashboard-admin.component'
@Component({
  selector: 'app-orden-trabajo-detalle',
  templateUrl: './orden-trabajo.component.html',
  styleUrls: ['./orden-trabajo.component.css'] ,
  standalone: true,
  imports: [DashboardAdminComponent,CommonModule]
})
export class OrdenTrabajoDetalleComponent implements OnInit {
  ordenesTrabajo: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ordenTrabajoService: OrdenTrabajoService
  ) {}

  
    async ngOnInit() {
      this.ordenesTrabajo = await this.ordenTrabajoService.getOrdenesTrabajo();
    }
  goBack() {
    this.router.navigate(['/dashboard-operario']);
  }
}