import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../interface/user.interface';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  private urlSpring: String = 'http://localhost:8080/api/v1/'

  constructor(
    private http: HttpClient,
  ) { }

  getUsers(token: string|null) :Observable<User[]>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<User[]>(this.urlSpring+'read-csv', {headers})
  }
}
