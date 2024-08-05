import { Component, Inject, OnInit } from '@angular/core';
import { User } from '../../interface/user.interface';
import { MatTableDataSource } from '@angular/material/table';
import { CreditCardService } from '../../services/credit-card.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-beneficios',
  templateUrl: './beneficios.component.html',
  styleUrl: './beneficios.component.css'
})
export class BeneficiosComponent implements OnInit {

  private localStorage = this.document.defaultView?.localStorage;
  usersList = new MatTableDataSource<User>();
  displayedColumns: string[] = ['name', 'creditNumber', 'beneficios'];
  beneficio1: string[] = ['30% descuento en Nike', '2x1 en Supercines', '3era poliburguer gratis'];
  beneficio2: string[] = ['15% descuento en Sweet & Coffee', '5% Cashback en locales de comida', 'Acceso VIP en aeropuerto'];
  beneficio3: string[] = ['50% descuento en el segundo producto en Adidas', 'Martes 2x1 en alitas en Top Ten'];
  private token: string | null = this.localStorage!.getItem('token');


  constructor(
    private creditService: CreditCardService,
    @Inject(DOCUMENT) private document: Document,
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  reloadPage() {
    window.location.reload();
  }

  public loadData() {
    this.creditService.getUsers(this.token)
      .subscribe(
        (response: any) => {
          this.usersList = response;
          console.log(response);

        }
      )
  }

}
