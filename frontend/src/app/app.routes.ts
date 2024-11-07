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


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login-form', component: LoginFormComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'orden-trabajo', component: OrdenTrabajoDetalleComponent },
  { path: 'orden-trabajo-form', component: OrdenTrabajoFormComponent },
  { path: 'dashboard-admin', component: DashboardAdminComponent },
  { path: 'dashboard-operario', component: DashboardOperarioComponent },
  { path: 'historial', component: HistorialComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

