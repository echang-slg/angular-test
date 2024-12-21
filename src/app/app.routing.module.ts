import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '@components/error/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('@components/home/home.component').then(c => c.HomeComponent)
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
