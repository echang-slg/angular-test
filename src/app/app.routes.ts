import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '@components/error/page-not-found.component';

export const appRoutes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('@components/home/home.component').then(c => c.HomeComponent)
  },
  { path: '**', component: PageNotFoundComponent }
];
