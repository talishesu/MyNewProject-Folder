import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {

   }

   getOneProduct(id:number) : Observable<Product>
   {
     return this.http.get<Product>(`${environment.apiLink}/products/${id}`);
   }
}
