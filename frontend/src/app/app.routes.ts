import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistroComponent } from './components/registro/registro.component';
import { OrdenTrabajoDetalleComponent } from './components/orden-trabajo/orden-trabajo.component';
import { OrdenTrabajoFormComponent } from './components/orden-trabajo-form/orden-trabajo-form.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { DashboardOperarioComponent } from './components/dashboard-operario/dashboard-operario.component';
import { HistorialComponent } from './components/historial/historial.component';
import { GestionComponent } from './components/gestion/gestion.component';
import { GestionActivosComponent } from './components/gestion/gestion-activos/gestion-activos.component';
import { GestionEdificiosComponent } from './components/gestion/gestion-edificios/gestion-edificios.component';
import { GestionPisosComponent } from './components/gestion/gestion-pisos/gestion-pisos.component';
import { GestionSectoresComponent } from './components/gestion/gestion-sectores/gestion-sectores.component';
import { GestionUbicacionesComponent } from './components/gestion/gestion-ubicaciones/gestion-ubicaciones.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login-form', component: LoginFormComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'orden-trabajo', component: OrdenTrabajoDetalleComponent },
  { path: 'orden-trabajo-form', component: OrdenTrabajoFormComponent },
  {
    path: 'dashboard-admin',
    component: DashboardAdminComponent,
    canActivate: [AuthGuard],
    data: { area: 'administrativo' },
  },
  {
    path: 'dashboard-operario',
    component: DashboardOperarioComponent,
    canActivate: [AuthGuard],
    data: { area: 'operario' },
  },
  { path: 'historial', component: HistorialComponent },
  { path: 'gestion', component: GestionComponent },
  { path: 'gestion-activos', component: GestionActivosComponent },
  { path: 'gestion-edificios', component: GestionEdificiosComponent },
  { path: 'gestion-pisos', component: GestionPisosComponent },
  { path: 'gestion-sectores', component: GestionSectoresComponent },
  { path: 'gestion-ubicaciones', component: GestionUbicacionesComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
