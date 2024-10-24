import { Component } from '@angular/core';

@Component({
  selector: 'app-corpo',
  standalone: true,
  imports: [],
  templateUrl: './corpo.component.html',
  styleUrl: './corpo.component.scss'
})
export class CorpoComponent {

  nome:string = "João";
  idade:number = 20;

}
