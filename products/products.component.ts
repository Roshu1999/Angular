import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { CartService } from '../../service/cart.service';
import { IProduct } from '../../shared/iproduct';
import { Icart } from '../cart/icart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = []
  cart: Icart ;
  items: any
  totalItem: number = 0;
  retVal: string ='';

  constructor(private api: ApiService, private atr: ActivatedRoute, private cartservice: CartService) {
    this.products = this.atr.snapshot.data['product']
    this.cart = { details: 'X', image: 'X', name: 'X', price: 'X', productid: 1000, quantity:'0',totalprice:'10',username:'' }
  }

  ngOnInit(): void {
  }

  addcart(productid: number, details: string, price: string, name: string, image: string) {
    this.cart = { details: details, image: image, name: name, price: price, productid: productid, quantity: '1', totalprice: '10', username: localStorage.getItem('UserName')?.toString() }
    console.log(productid);
    this.cartservice.addtoCart(this.cart).subscribe((d) => {
      this.retVal = d; console.log("*imp********------->");
      console.log(this.cart);
      this.api.cartcount.subscribe((r) => { this.totalItem = r; }); 
      this.api.cartcount.next(this.totalItem + 1);

      console.log(d); alert('Product Added Successfully!');
    });
  }
}


/*console.log("*IMP" + this.totalItem);*/
