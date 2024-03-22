import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-compartilhar-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './compartilhar-input.component.html',
  styleUrl: './compartilhar-input.component.css'
})
export class CompartilharInputComponent {
  @Input() nome:string = "Marcelo Cintra"
  @Input() frutas:any = []
  @Input() pessoas:any = []
}
