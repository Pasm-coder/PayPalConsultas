import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-actualizaciones',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink, CommonModule],
  templateUrl: './actualizaciones.component.html',
  styleUrl: './actualizaciones.component.css'
})
export class ActualizacionesComponent {

  mostrarCTs: boolean = false;

  toggleCTs(): void {
    this.mostrarCTs = !this.mostrarCTs;
  }

}