import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  model: Product={} as Product;
  constructor(private productServ: ProductService) { }

  ngOnInit(): void {

    this.productServ.getOneProduct(1).subscribe(data=>{
      console.log(data)
      this.model=data;
    });
  }
}
