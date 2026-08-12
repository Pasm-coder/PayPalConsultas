import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ConsultasComponent } from './componentes/consultas/consultas.component';
import { CentroInfoComponent } from './componentes/centro.info/centro.info.component';
import { StaffComponent } from './componentes/staff/staff.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'consultas', component: ConsultasComponent },
  { path: 'centro-info', component: CentroInfoComponent },
  { path: 'staff', component: StaffComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }