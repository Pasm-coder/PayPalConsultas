import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './componentes/home/home.component';
import { ConsultasComponent } from './componentes/consultas/consultas.component';
import { CentroInfoComponent } from './componentes/centro.info/centro.info.component';
import { StaffComponent } from './componentes/staff/staff.component';
import { ActualizacionesComponent } from './componentes/actualizaciones/actualizaciones.component';
import { PaisesComponent } from './componentes/paises/paises.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'consultas', component: ConsultasComponent },
  { path: 'centro-info', component: CentroInfoComponent },
  { path: 'actualizaciones', component: ActualizacionesComponent },
  { path: 'paises', component: PaisesComponent },
  { path: 'staff', component: StaffComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
