import { Component } from '@angular/core';
import { User } from '../../interface/user.interface';
import { CreditCardService } from '../services/credit-card.service';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  public users: User[] = [];
  usersList = new MatTableDataSource<User>();
  displayedColumns: string[] = ['id', 'name', 'creditNumber', 'pago'];

  constructor(private creditService: CreditCardService) { }

  ngOnInit(): void {
    this.loadData();
  }

  reloadPage() {
    window.location.reload();
  }

  public loadData() {
    this.creditService.getUsers()
      .subscribe(
        data => {
          let csvToRowArray = data.split("\n");
          for (let index = 1; index < csvToRowArray.length - 1; index++) {
            let row = csvToRowArray[index].split(",");
            this.users.push(new User(parseInt(row[0]), row[1], parseInt(row[2]), parseInt(row[3])));
          }
          this.usersList.data = this.users
        },
        error => {
          console.log(error);
        }
      );
  }
}
