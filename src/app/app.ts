import { Component } from '@angular/core';
import { Pregunta } from '../modelo/pregunta.modelo';
import { Opcion } from './opcion/opcion';
import { Resultados } from './resultados/resultados';

@Component({
  selector: 'app-root',
  imports: [Opcion, Resultados],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  preguntasResource = null as any; // Placeholder para el resource de preguntas, que debería ser inyectado o inicializado adecuadamente

  preguntas: Pregunta[] = [];
  preguntasUsadas: Set<number> = new Set();
  posicionActual = 0;
  preguntaActual: Pregunta | null = null;
  puntuacion = 0;
  maxPreguntas = 5;

  verificarRespuesta(respuestaSeleccionada: number): void {
    if (this.preguntaActual) {
      if (respuestaSeleccionada === this.preguntaActual.respuestaCorrecta) {
        this.puntuacion++;
      }
      this.posicionActual++;
      if (this.posicionActual < this.maxPreguntas) {
        this.preguntaActual = this.seleccionarPreguntaAleatoria();
      } else {
        this.preguntaActual = null;
      }
    }
  }

  empezar(): void {
    this.preguntas = this.preguntasResource.value() || [];
    this.preguntasUsadas = new Set();
    this.posicionActual = 0;
    this.puntuacion = 0;
    this.preguntaActual = this.seleccionarPreguntaAleatoria();
  }

  private seleccionarPreguntaAleatoria(): Pregunta | null {
    const disponibles = this.preguntas.filter((p) => !this.preguntasUsadas.has(p.id));

    if (disponibles.length === 0) {
      return null;
    }

    const indiceAleatorio = Math.floor(Math.random() * disponibles.length);
    const pregunta = disponibles[indiceAleatorio];
    this.preguntasUsadas.add(pregunta.id);

    return pregunta;
  }
}
