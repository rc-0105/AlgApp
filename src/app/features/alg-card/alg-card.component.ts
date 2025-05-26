import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alg-card',
  imports: [CommonModule],
  templateUrl: './alg-card.component.html',
  styleUrl: './alg-card.component.css',
  animations: [
    trigger('expandAnimation', [
      state('collapsed', style({
        width: '300px',
        height: '200px',
        position: 'relative'
      })),
      state('expanded', style({
        width: '90vw',
        height: '90vh',
        position: 'fixed',
        top: '5%',
        left: '5%',
        zIndex: 1000
      })),
      transition('collapsed => expanded', animate('0.3s ease-in')),
      transition('expanded => collapsed', animate('0.3s ease-out'))
    ]),
    trigger('backdropAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.3s', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('0.3s', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AlgCardComponent {

  @Input() title: string = 'Título';
  @Input() collapsedContent: string = 'Contenido inicial...';
  @Input() expandedContent: string = 'Detalles completos...';
  @Output() cardExpanded = new EventEmitter<boolean>();

  isExpanded = false;

  toggleCard(event?: MouseEvent) {
    // Evita la propagación del clic si viene del botón "Cerrar" o contenido expandido
    if (event && (event.target as HTMLElement).closest('.expanded-content')) {
      return;
    }
    this.isExpanded = !this.isExpanded;
  }

}
