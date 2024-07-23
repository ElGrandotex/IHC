import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'credit-card',
    loadChildren: () => import('./credit-card/credit-card.module').then(m => m.CreditCardModule)
  },
  {
    path: '',
    redirectTo: 'credit-card',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'credit-card',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
