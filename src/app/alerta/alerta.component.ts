import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-alerta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alerta.component.html',
  styleUrl: './alerta.component.scss'
})
export class AlertaComponent {
  imagem = "assets/img/image1.webp";

  alterarImagem() {
    if(this.imagem === "assets/img/image1.webp") {
      this.imagem = "assets/img/image2.webp";
    } else {
      this.imagem = "assets/img/image1.webp";
    }
  }
}
