import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-opcion',
  styleUrl: './opcion.css',
  templateUrl: './opcion.html',
})
export class Opcion {
  texto = input<string>();
  numero = input<number>(0);

  seleccionarOpcion = output<number>();
}
