import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProduct } from '../shared/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

/*  baseUrl: string = 'http://capstoneregister.com';*/

  constructor(private http: HttpClient, private router: Router) { }
  public isLogin: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);
  public username: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public cartcount: BehaviorSubject<number> = new BehaviorSubject<number>(0);


  login(accessToken: string, AccessTokenExpirationDate: string, username: string) {
    console.log("***********************true----------------->",this.isLogin.value);
    this.isLogin.next(true);
    localStorage.setItem('AccessToken', accessToken);
    localStorage.setItem('AccessTokenExpirationDate', AccessTokenExpirationDate);
    localStorage.setItem('UserName', username);
    console.log("CCCCCCC--->" +username + "_" + localStorage.getItem('UserName'));
    this.username.next(username);
    console.log("LoggedIn Value : " + this.isLogin.value);
    this.router.navigate(['home']);
  }

  private hasToken(): boolean {
    return !localStorage.getItem('AccessToken');
  }

  getproducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>("http://fake.alpha.com/api/Product");
  }
}
