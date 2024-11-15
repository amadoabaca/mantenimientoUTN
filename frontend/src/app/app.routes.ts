import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistroComponent } from './components/registro/registro.component';
import { OrdenTrabajoDetalleComponent } from './components/orden-trabajo/orden-trabajo.component';
import { OrdenTrabajoFormComponent } from './components/orden-trabajo-form/orden-trabajo-form.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { DashboardOperarioComponent } from './components/dashboard-operario/dashboard-operario.component';
import { GestionComponent } from './components/gestion/gestion.component';
import { GestionActivosComponent } from './components/gestion/gestion-activos/gestion-activos.component';

import { HistorialComponent } from './components/historial/historial.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'gestion',
    component: GestionComponent,
    canActivate: [AuthGuard],
    data: { role: 'administrativo' },
  },
  {
    path: 'gestion-activos',
    component: GestionActivosComponent,
    canActivate: [AuthGuard],
    data: { role: 'administrativo' },
  },
  { path: 'login-form', component: LoginFormComponent },
  {
    path: 'registro',
    component: RegistroComponent,
    canActivate: [AuthGuard],
    data: { role: 'administrativo' },
  },
  {
    path: 'orden-trabajo',
    component: OrdenTrabajoDetalleComponent,
    canActivate: [AuthGuard],
    data: { role: 'administrativo' },
  },
  {
    path: 'orden-trabajo-form',
    component: OrdenTrabajoFormComponent,
    canActivate: [AuthGuard],
    data: { role: 'administrativo' },
  },
  {
    path: 'dashboard-admin',
    component: DashboardAdminComponent,
    canActivate: [AuthGuard],
    data: { role: 'administrativo' },
  },
  {
    path: 'dashboard-operario',
    component: DashboardOperarioComponent,
    canActivate: [AuthGuard],
    data: { role: 'operario' },
  },
  {
    path: 'historial',
    component: HistorialComponent,
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
