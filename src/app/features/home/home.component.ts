import { Component } from '@angular/core';
import { AlgCardComponent } from '../alg-card/alg-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [AlgCardComponent, CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  cards = [
  {
    title: 'Carta 1',
    collapsedContent: 'Resumen carta 1...',
    expandedContent: 'Detalles carta 1...'
  },
  {
    title: 'Carta 2',
    collapsedContent: 'Resumen carta 2...',
    expandedContent: 'Detalles carta 2...'
  },
  {
    title: 'Carta 3',
    collapsedContent: 'Resumen carta 2...',
    expandedContent: 'Detalles carta 2...'
  },
  {
    title: 'Carta 4',
    collapsedContent: 'Resumen carta 2...',
    expandedContent: 'Detalles carta 2...'
  },
];
onCardExpand(isExpanded: boolean, index: number) {
  if (isExpanded) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
}
}
