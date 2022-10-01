import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Icart } from '../component/cart/icart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public productList = new BehaviorSubject<any>([]);
  public cartList : any =[]
  //cart: Icart[] = []
  constructor(private http: HttpClient) { }
  addtoCart(cart: Icart){
    return this.http.post<string>("http://fake.alpha.com/api/Cart/addtocart",cart);
  }

  getcart(username: string) {
    return this.http.get<any>("http://fake.alpha.com/api/Cart/username?username=" + username);
  }

  deleteproduct(productid: number) {
    return this.http.delete<any>("http://fake.alpha.com/api/cart/" + productid)
  }

  removeAllCart() {

  }
}
