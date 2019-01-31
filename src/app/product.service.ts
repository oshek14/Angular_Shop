import { Product } from 'src/app/models/product';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { 

  }

  create(product){
    this.db.list('/products').push(product);
  }

  getAll(){
    return this.db.list<Product>('/products').snapshotChanges().pipe(map(changes=>{
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }))
  }

  getProductById(productId): Observable<Product>{
    return this.db.object<Product>("/products/"+productId).valueChanges().pipe(take(1)); //take automatically unsubscribes
  }

  update(productId, product){
    return this.db.object("/products/"+productId).update(product);
  }

  delete(productId){
    return this.db.object("/products/"+productId).remove();
  }
}
