import { Subscription } from 'rxjs';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'shared/services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from 'shared/models/product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy{

  products : Product[] = [];
  filteredProducts: Product[];
  category:string;
  cart:any;
  subscription: Subscription;
  constructor(productService: ProductService,  route: ActivatedRoute,private shoppingCartService: ShoppingCartService) { 
    
    // we could have used switchmap instead of nested subscribe.
    productService.getAll().subscribe(products => {
     
      this.filteredProducts = this.products = products;
      
      route.queryParamMap.subscribe(params =>{
        this.category = params.get("category");
        this.filteredProducts = (this.category) ? 
          this.products.filter(p=> p.category === this.category) :
          this.products;
      })
    });
  }

  async ngOnInit(){
    this.subscription = (await this.shoppingCartService.getCart()).subscribe(cart => this.cart = cart);   
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  

  

}
