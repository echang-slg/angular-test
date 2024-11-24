import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './error/page-not-found.component';

export const appRoutes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(c => c.HomeComponent)
  },
  { path: '**', component: PageNotFoundComponent }
];
