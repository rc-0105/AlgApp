import { Component } from '@angular/core';
import { AlgCardComponent } from '../alg-card/alg-card.component';
import { CommonModule } from '@angular/common';
import { CsvUploadComponent } from '../csv-upload/csv-upload.component';

@Component({
  selector: 'app-home',
  imports: [AlgCardComponent, CommonModule, CsvUploadComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cards = [
  {
    title: 'Árboles de Decisión',
    collapsedContent: 'Modelo de aprendizaje supervisado usado para clasificación y regresión. Visualiza decisiones como ramas.',
    expandedContent: `
      <div class="alg-card-detail">
        <h3>¿Qué es un Árbol de Decisión?</h3>
        <p>Un árbol de decisión es un modelo predictivo que representa decisiones y sus posibles consecuencias en forma de árbol. Cada nodo interno representa una pregunta o condición sobre una característica, cada rama representa el resultado de esa condición y cada hoja representa una predicción o resultado final.</p>
        <ul class="alg-list">
          <li><strong>Fácil de interpretar y visualizar</strong></li>
          <li>Puede manejar variables categóricas y numéricas</li>
          <li>Propenso al sobreajuste si no se poda correctamente</li>
        </ul>
        <h4>Aplicaciones</h4>
        <ul class="alg-list">
          <li>Clasificación de datos (por ejemplo, diagnóstico médico, segmentación de clientes).</li>
          <li>Problemas de regresión.</li>
        </ul>
        <h4>Ventajas</h4>
        <ul class="alg-list">
          <li>No requiere normalización de datos.</li>
          <li>Explicabilidad y transparencia.</li>
        </ul>
        <h4>Desventajas</h4>
        <ul class="alg-list">
          <li>Sensible a pequeños cambios en los datos.</li>
          <li>Puede crear árboles muy complejos (sobreajuste).</li>
        </ul>
        <h4>Paso a paso: ¿Cómo construir un Árbol de Decisión?</h4>
        <ol class="alg-list">
          <li><strong>Selecciona la mejor característica para dividir:</strong> Calcula una métrica como <em>ganancia de información</em> (ID3), <em>índice Gini</em> (CART) o <em>ganancia de información normalizada</em> (C4.5) para cada característica. Elige la que mejor separa las clases.</li>
          <li><strong>Divide el conjunto de datos:</strong> Separa los datos en subconjuntos según los valores de la característica seleccionada.</li>
          <li><strong>Repite recursivamente:</strong> Para cada subconjunto, repite el proceso de selección de característica y división, creando nuevos nodos y ramas.</li>
          <li><strong>Condición de parada:</strong> Detén la división si:
            <ul>
              <li>Todos los ejemplos del nodo pertenecen a la misma clase.</li>
              <li>No quedan características para dividir.</li>
              <li>Se alcanza una profundidad máxima o un número mínimo de muestras.</li>
            </ul>
          </li>
          <li><strong>Asigna una clase a la hoja:</strong> La clase más frecuente en ese nodo se asigna como predicción.</li>
        </ol>
        <h4>Ejemplo matemático (Ganancia de información):</h4>
        <div style="text-align:left;max-width:700px;margin:0 auto;">
          <p>Supón que tienes un conjunto de datos con la variable objetivo <strong>Y</strong> y una característica <strong>X</strong>:</p>
          <ol>
            <li>Calcula la entropía de Y: <br>
              <code>Entropía(Y) = - \sum p_i \log_2(p_i)</code>
            </li>
            <li>Para cada valor de X, calcula la entropía condicional de Y dado X.</li>
            <li>La ganancia de información es:<br>
              <code>IG(Y, X) = Entropía(Y) - Entropía(Y|X)</code>
            </li>
            <li>Elige la X con mayor IG para dividir.</li>
          </ol>
        </div>
        <div class="alg-footer">Algoritmos populares: <span class="alg-tag">ID3</span>, <span class="alg-tag">C4.5</span>, <span class="alg-tag">CART</span></div>
      </div>
    `
  },
  {
    title: 'K-Modes',
    collapsedContent: 'Algoritmo de clustering para datos categóricos. Agrupa objetos similares en K grupos usando coincidencia de modos.',
    expandedContent: `
      <div class="alg-card-detail">
        <h3>¿Qué es K-Modes?</h3>
        <p>K-Modes es un algoritmo de <strong>clustering</strong> diseñado para agrupar datos categóricos en <strong>K</strong> grupos (clusters) de modo que los objetos dentro de un mismo grupo sean lo más similares posible. Es una extensión de K-Means, pero en vez de promedios usa <strong>modos</strong> (valores más frecuentes) para definir el centroide de cada cluster.</p>
        <ul class="alg-list">
          <li>Ideal para variables categóricas (no numéricas).</li>
          <li>Utiliza la <strong>distancia de coincidencia simple</strong> (Hamming) para medir similitud.</li>
          <li>El centroide de cada cluster es un vector de modos.</li>
        </ul>
        <h4>Aplicaciones</h4>
        <ul class="alg-list">
          <li>Segmentación de clientes por preferencias o categorías.</li>
          <li>Agrupamiento de documentos, productos o perfiles.</li>
        </ul>
        <h4>Ventajas</h4>
        <ul class="alg-list">
          <li>Rápido y eficiente para grandes conjuntos de datos categóricos.</li>
          <li>Fácil de interpretar y de implementar.</li>
        </ul>
        <h4>Desventajas</h4>
        <ul class="alg-list">
          <li>Requiere especificar el número de clusters K.</li>
          <li>Sensible a la inicialización de los centroides.</li>
        </ul>
        <h4>Paso a paso: ¿Cómo funciona K-Modes?</h4>
        <ol class="alg-list">
          <li><strong>Inicialización:</strong> Selecciona K objetos aleatorios como centroides iniciales (modos).</li>
          <li><strong>Asignación:</strong> Para cada objeto, calcula la distancia de coincidencia simple a cada centroide y asígnalo al cluster más cercano.</li>
          <li><strong>Actualización:</strong> Para cada cluster, calcula el nuevo modo (valor más frecuente) de cada atributo y actualiza el centroide.</li>
          <li><strong>Repite:</strong> Repite los pasos de asignación y actualización hasta que los centroides no cambien o se alcance un número máximo de iteraciones.</li>
        </ol>
        <h4>Ejemplo matemático (Distancia de coincidencia simple):</h4>
        <div style="text-align:left;max-width:700px;margin:0 auto;">
          <p>Para dos objetos categóricos <strong>X</strong> y <strong>Y</strong> de n atributos:</p>
          <code>dist(X, Y) = \sum_{i=1}^n [x_i \neq y_i]</code>
          <p>Donde <code>[x_i \neq y_i]</code> es 1 si los valores son diferentes y 0 si son iguales.</p>
        </div>
        <div class="alg-footer">Algoritmo popular: <span class="alg-tag">K-Modes</span></div>
      </div>
    `
  },
  {
    title: 'K-Means',
    collapsedContent: 'Algoritmo de clustering para datos numéricos. Agrupa objetos en K grupos minimizando la distancia a los centroides.',
    expandedContent: `
      <div class="alg-card-detail">
        <h3>¿Qué es K-Means?</h3>
        <p>K-Means es un algoritmo de <strong>clustering</strong> que agrupa datos numéricos en <strong>K</strong> grupos (clusters) de tal forma que los objetos dentro de un mismo grupo sean lo más similares posible. El centro de cada grupo se llama <strong>centroide</strong> y se calcula como el promedio de los puntos asignados a ese cluster.</p>
        <ul class="alg-list">
          <li>Ideal para variables numéricas.</li>
          <li>Utiliza la <strong>distancia euclidiana</strong> para medir similitud.</li>
          <li>El centroide es el promedio de los puntos del cluster.</li>
        </ul>
        <h4>Aplicaciones</h4>
        <ul class="alg-list">
          <li>Segmentación de clientes por comportamiento de compra.</li>
          <li>Agrupamiento de imágenes, documentos o datos biométricos.</li>
        </ul>
        <h4>Ventajas</h4>
        <ul class="alg-list">
          <li>Rápido y eficiente para grandes conjuntos de datos numéricos.</li>
          <li>Fácil de interpretar y de implementar.</li>
        </ul>
        <h4>Desventajas</h4>
        <ul class="alg-list">
          <li>Requiere especificar el número de clusters K.</li>
          <li>Sensible a la inicialización de los centroides y a valores atípicos.</li>
        </ul>
        <h4>Paso a paso: ¿Cómo funciona K-Means?</h4>
        <ol class="alg-list">
          <li><strong>Inicialización:</strong> Selecciona K puntos aleatorios como centroides iniciales.</li>
          <li><strong>Asignación:</strong> Para cada punto, calcula la distancia euclidiana a cada centroide y asígnalo al cluster más cercano.</li>
          <li><strong>Actualización:</strong> Para cada cluster, calcula el nuevo centroide como el promedio de los puntos asignados.</li>
          <li><strong>Repite:</strong> Repite los pasos de asignación y actualización hasta que los centroides no cambien o se alcance un número máximo de iteraciones.</li>
        </ol>
        <h4>Ejemplo matemático (Distancia euclidiana):</h4>
        <div style="text-align:left;max-width:700px;margin:0 auto;">
          <p>Para dos puntos <strong>X</strong> y <strong>Y</strong> en n dimensiones:</p>
          <code>dist(X, Y) = \sqrt{\sum_{i=1}^n (x_i - y_i)^2}</code>
        </div>
        <div class="alg-footer">Algoritmo popular: <span class="alg-tag">K-Means</span></div>
      </div>
    `
  },
  {
    title: 'Regresión Lineal',
    collapsedContent: 'Algoritmo de aprendizaje supervisado para predecir valores numéricos continuos a partir de variables independientes.',
    expandedContent: `
      <div class="alg-card-detail">
        <h3>¿Qué es la Regresión Lineal?</h3>
        <p>La regresión lineal es un algoritmo de <strong>aprendizaje supervisado</strong> que modela la relación entre una variable dependiente (Y) y una o más variables independientes (X) mediante una línea recta. Se utiliza para predecir valores numéricos continuos.</p>
        <ul class="alg-list">
          <li>Predice valores numéricos (por ejemplo, precios, temperaturas, ventas).</li>
          <li>La relación se representa como una línea recta: <code>Y = aX + b</code> (simple) o <code>Y = a_1X_1 + a_2X_2 + ... + b</code> (múltiple).</li>
          <li>Los coeficientes se ajustan para minimizar el error cuadrático medio.</li>
        </ul>
        <h4>Aplicaciones</h4>
        <ul class="alg-list">
          <li>Predicción de precios de casas, ventas, demanda, etc.</li>
          <li>Análisis de tendencias y relaciones entre variables.</li>
        </ul>
        <h4>Ventajas</h4>
        <ul class="alg-list">
          <li>Fácil de interpretar y de implementar.</li>
          <li>Rápido para entrenamiento y predicción.</li>
        </ul>
        <h4>Desventajas</h4>
        <ul class="alg-list">
          <li>Supone relación lineal entre variables.</li>
          <li>Sensible a valores atípicos y multicolinealidad.</li>
        </ul>
        <h4>Paso a paso: ¿Cómo funciona la Regresión Lineal?</h4>
        <ol class="alg-list">
          <li><strong>Plantea el modelo:</strong> <code>Y = aX + b</code> (simple) o <code>Y = a_1X_1 + ... + a_nX_n + b</code> (múltiple).</li>
          <li><strong>Calcula los coeficientes:</strong> Utiliza el método de <em>mínimos cuadrados</em> para encontrar los valores de <code>a</code> y <code>b</code> que minimizan el error cuadrático medio.</li>
          <li><strong>Evalúa el modelo:</strong> Calcula métricas como <em>R²</em> y <em>error cuadrático medio</em> para medir el ajuste.</li>
          <li><strong>Predice nuevos valores:</strong> Sustituye los valores de X en la ecuación ajustada.</li>
        </ol>
        <h4>Ejemplo matemático (Mínimos cuadrados):</h4>
        <div style="text-align:left;max-width:700px;margin:0 auto;">
          <p>Para datos <code>(x_1, y_1), ..., (x_n, y_n)</code>:</p>
          <code>a = \frac{n\sum x_iy_i - \sum x_i \sum y_i}{n\sum x_i^2 - (\sum x_i)^2}</code><br>
          <code>b = \frac{\sum y_i - a\sum x_i}{n}</code>
        </div>
        <div class="alg-footer">Algoritmo popular: <span class="alg-tag">Regresión Lineal</span></div>
      </div>
    `
  }
];
datosProcesados: any[] | null = null;
onDatosProcesados(datos: any[]) {
  this.datosProcesados = datos;
}
onCardExpand(isExpanded: boolean, index: number) {
  if (isExpanded) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
}
}
