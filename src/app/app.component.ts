import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CorpoComponent } from './corpo/corpo.component';
import { AlertaComponent } from "./alerta/alerta.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CorpoComponent, AlertaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PIN';
}
