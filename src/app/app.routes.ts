import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error/page-not-found.component';

export const appRoutes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(c => c.HomeComponent)
  },
  { path: '**', component: PageNotFoundComponent }
];
