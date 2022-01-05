import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../../models/products';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) {

   }

   getAllProducts() : Observable<Products[]>
   {
     return this.http.get<Products[]>(`${environment.apiLink}/products`);
   }
}
