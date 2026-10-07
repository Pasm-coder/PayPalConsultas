import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-paises',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent {

  paisSeleccionado: string = '';

  abrirPais(nombre: string): void {
    this.paisSeleccionado = nombre;
  }

  cerrarPais(): void {
    this.paisSeleccionado = '';
  }

}