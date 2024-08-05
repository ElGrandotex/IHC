import { Component, Inject, OnInit } from '@angular/core';
import { User } from '../../interface/user.interface';
import { CreditCardService } from '../../services/credit-card.service';
import { MatTableDataSource } from '@angular/material/table';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  private localStorage = this.document.defaultView?.localStorage;
  usersList = new MatTableDataSource<User>();
  displayedColumns: string[] = ['id', 'name', 'creditNumber', 'pago'];
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
