import { ProductService } from 'shared/services/product.service';
import { CategoryService } from 'shared/services/category.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  product = {};
  productId;
  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private categoryService: CategoryService, 
    private productService: ProductService) { 

      
    this.categories$ = categoryService.getCategories();
    this.productId = this.route.snapshot.paramMap.get('id');
    if(this.productId) this.productService.getProductById(this.productId).subscribe(p=>this.product = p);
  }

  ngOnInit() {
  }

  save(product){
    if(this.productId) this.productService.update(this.productId, product);
    else this.productService.create(product);
    
    this.router.navigate(['/admin/products']);
  }

  delete(){
    if(!confirm("are you sure to delete this product")) return;

    this.productService.delete(this.productId);
    this.router.navigate(['/admin/products']);
  }
}
