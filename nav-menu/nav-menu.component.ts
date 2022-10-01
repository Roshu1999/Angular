import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit{

  public username: any = localStorage.getItem('UserName');
  isExpanded = false;
  isLoggedInCheck: Boolean = false;
  public totalItem: number = 0;
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  constructor(private api: ApiService,  private cartService: CartService, private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string)
  { }
  ngOnInit() {
    this.api.isLogin.subscribe((d) => { this.isLoggedInCheck = d; 

      console.log("NAV Call--->");
    console.log(this.username);
    //this.cartService.getcart().subscribe(res => {
    //  this.api.cartcount.next(res.length);
    //  this.api.cartcount.subscribe((r) => { this.totalItem = r; });
    //})

      if (this.isLoggedInCheck == true) {
        //this.api.cartcount.subscribe((r) => {

          this.http.get<number>(this.baseUrl + 'home/getcartitemcount').subscribe((r) => {
            //this.totalItem = r;

            this.api.cartcount.next(r);
            this.api.cartcount.subscribe(d => { this.totalItem = d; })
          });
       // });
      }
    });
  }
}
