import { Component, Input } from '@angular/core';
import { CompartilharInputComponent } from '../compartilhar-input/compartilhar-input.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-decorador-input',
  standalone: true,
  imports: [CompartilharInputComponent, CommonModule],
  templateUrl: './decorador-input.component.html',
  styleUrl: './decorador-input.component.css'
})
export class DecoradorInputComponent {
  nome:string = "Marcelo Cintra"
  frutas = ["banana", "pera", "uva"]

  cadastro = [
    {nome: "Marcelo", idade: 19, email: "marcelo@email.com"},
    {nome: "Matheus", idade: 72, email: "dickcock@email.com"}
  ]


}
