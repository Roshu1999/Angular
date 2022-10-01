import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CartService } from '../../service/cart.service';
import { Icart } from './icart';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Icart[] = [];
  public username: any = localStorage.getItem('UserName');
  displayedColumns: string[] = ['image', 'productid', 'details', 'name', 'price','quantity','totalprice','Perform'];
  dataSource !: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator !: MatPaginator;


  constructor(private cartService: CartService) { }
  ngOnInit(): void {

    this.getAllProducts(this.username);
  }

  getAllProducts(username: string) {
    this.cartService.getcart(username).subscribe({
      next: (result) => {
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.paginator = this.paginator;
      }
    })
  }

  deleteEmployee(productid: number) {
    this.cartService.deleteproduct(productid).subscribe({
      next: () => {
        alert("Deleted Successfully..!");
        this.getAllProducts(this.username);
      }
    })
  }

  emptycart() {
    this.cartService.removeAllCart();
  }

}


