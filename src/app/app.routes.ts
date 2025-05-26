import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'home',
        loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'documentation',
        loadComponent: () => import('./features/documentation/documentation.component').then(m => m.DocumentationComponent)
    },
    {
        path: 'diagrams',
        loadComponent: () => import('./features/diagrams/diagrams.component').then(m => m.DiagramsComponent)
    },
];
