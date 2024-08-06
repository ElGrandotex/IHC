import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditCardRoutingModule } from './credit-card-routing.module';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { MaterialModule } from '../material/material.module';
import { HomePageComponent } from './home-page/home-page.component';
import { PagoComponent } from './pago/pago.component';
import { BeneficiosComponent } from './beneficios/beneficios.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    HomePageComponent,
    PagoComponent,
    BeneficiosComponent
  ],
  imports: [
    CommonModule,
    CreditCardRoutingModule,
    MaterialModule
  ]
})
export class CreditCardModule { }
