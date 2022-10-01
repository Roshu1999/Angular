import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IProduct } from '../shared/iproduct';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProdresolveService implements Resolve<IProduct[]> {

  constructor(private api: ApiService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IProduct[] | Observable<IProduct[]> | Promise<IProduct[]> {
    return this.api.getproducts();
    }
}
