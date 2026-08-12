import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-centro.info',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './centro.info.component.html',
  styleUrl: './centro.info.component.css'
})
export class CentroInfoComponent {

}
