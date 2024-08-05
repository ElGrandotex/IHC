import { Component, Inject, OnInit } from '@angular/core';
import { User } from '../../interface/user.interface';
import { MatTableDataSource } from '@angular/material/table';
import { CreditCardService } from '../../services/credit-card.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrl: './pago.component.css'
})
export class PagoComponent implements OnInit {

  private localStorage = this.document.defaultView?.localStorage;
  usersList = new MatTableDataSource<User>();
  displayedColumns: string[] = ['name', 'creditNumber', 'pagoPendiente'];
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
        }
      )
  }

}
