import { Injectable } from '@angular/core';
import { UserLoginInterface } from '../interface/user-login.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user?: UserLoginInterface;
  private urlSpring: String = 'http://localhost:8080/auth/'

  constructor(private http: HttpClient) { }

  get currentUser(){
    if(!this.user) return undefined;
    return this.user;
  }

  public login(user: UserLoginInterface): Observable<any>{
    return this.http.post<UserLoginInterface>(this.urlSpring+'login', user)
    .pipe(
      tap(userV => this.user = user),
    )
  }

  public register(user: UserLoginInterface): Observable<UserLoginInterface>{
    return this.http.post<UserLoginInterface>(this.urlSpring+'register', user);
  }

}
