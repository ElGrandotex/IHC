import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PagoComponent } from './pago/pago.component';
import { BeneficiosComponent } from './beneficios/beneficios.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'home', component: HomePageComponent},
      { path: 'pago', component: PagoComponent},
      { path: 'beneficio', component: BeneficiosComponent},
      { path: '**', redirectTo:'home'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditCardRoutingModule { }
