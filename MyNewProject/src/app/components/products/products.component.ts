import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { Products } from 'src/app/models/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  model: Products[] = [] as Product[];
  constructor(private productsServ: ProductsService) { }

  ngOnInit(): void {

    this.productsServ.getAllProducts().subscribe(data=>{
      this.model=data;
    });
  }
}
