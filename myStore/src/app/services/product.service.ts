import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../types/data-type';
import { Observable } from 'rxjs/internal/Observable';
import { SHOP_API } from 'src/assets/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product> {
    return this.http.get<Product>(SHOP_API)
  }

}
