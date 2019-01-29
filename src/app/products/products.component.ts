import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './../category.service';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent{

  products : Product[] = [];
  filteredProducts: Product[];
  category:string;
  constructor(productService: ProductService, route: ActivatedRoute) { 
    
    // we could have used switchmap instead of nested subscribe.
    productService.getAll().subscribe(products => {
      this.filteredProducts = this.products = products
      
      route.queryParamMap.subscribe(params =>{
        this.category = params.get("category");
        this.filteredProducts = (this.category) ? 
          this.products.filter(p=> p.category === this.category) :
          this.products;
      })
    });
    
    
  }

  

  

}
