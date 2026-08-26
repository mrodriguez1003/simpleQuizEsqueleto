#Instrucciones

## 1. Descargar el esqueleto

Cree un fork del repositorio: 
https://github.com/mar-san1/simpleQuizEsqueleto

Ejecute la aplicación usando `ng serve`

## 2. Crear environments

Cree los environments con el siguiente contenido.

```typescript
export const environment = {
  production: false,
  gistURL: 'http://localhost:4200/preguntas.json',
};
```
Para el environment de producción, la propiedad `production` debería ser `true`.


## 3. Configure el HTTPClient y httpRequest

Configure HttpClient para poder usar httpRequest.

Luego, en `app.ts`, modifique el código para inicializar el recurso de las preguntas.

```typescript
  preguntasResource = httpResource<Pregunta[]>(() => environment.gistURL);
```

## 4. Plantilla opciones

Cree las plantillas html para mostrar una opción en `opcion.html`. 

```html
<div class="opcion-wrap">
    <button class="opcion-btn">Texto opcion</button>
</div>
```
## 5. Ajustar plantillas

Modifique la plantilla `app.html` para que muestre el componente de opciones y el componente de los resultados.

## 6. Mostrar la información correcta

### 6.1 Empezar

Haga los ajustes en la plantilla `app.html` para que al hacerle click al botón de empezar, se ejecute el método `empezar()`.

### 6.2 Resultados

Modifique el componente de resultados para que reciba la puntuación y el total de preguntas.  Haga los ajustes en la plantilla para mostrar estos dos valores y ajuste `app.html` para enviar la información necesaria.

### 6.3 Opción

Modifique el componente de opcion para que reciba el texto de la opción y el número de la opción.  Haga los ajustes en la plantilla para mostrar el texto de la opción y para que al hacerle click al botón se seleccione la opción con el número adecuado.

Haga los ajustes en la plantilla `app.html` para pasarle al componente estos dos valores.

Haga los ajustes también para que al seleccionar una opción se llame al método `verificarRespuesta`.

## 7. Fin del taller

Verifique que todo esté funcionando y haga los ajustes necesarios. Por ejemplo, no deberían mostrarse preguntas antes de empezar, y no deberían mostrarse después de haber terminado.

