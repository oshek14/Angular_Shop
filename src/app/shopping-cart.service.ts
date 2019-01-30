import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { take, map } from 'rxjs/operators';
import { ShoppingCartItem } from './models/shopping-cart-item';
import { Observable } from 'rxjs';
import { ShoppingCart } from './models/shopping-cart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }


  private create(){
    return this.db.list("/shopping-carts").push({
      dateCreated: new Date().getTime()
    });
  }

  

  private getItem(cartId: string, productId : string){
    return  this.db.object<any>('/shopping-carts/' + cartId + '/items/' + productId);
  }

  private async getOrCreateCartId() : Promise<string>{
    let cartId = localStorage.getItem('cartId');
    if(cartId) return cartId;

    let result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;
  }

  async getCart() : Promise<Observable<ShoppingCart>>{
    let cartId = await this.getOrCreateCartId();
    return this.db.object<ShoppingCart>("/shopping-carts/"+cartId).valueChanges().pipe(map(r=>{
        return new ShoppingCart(r.items);
    }))
  }


  addToCart(product: Product){
    this.updateItemQuantity(product,1);
  }

  removeFromCart(product: Product){
    this.updateItemQuantity(product, -1);
  }

  private async updateItemQuantity(product: Product, change: number){
    let cartId = await this.getOrCreateCartId();
    let item$ =this.getItem(cartId, product.key);
    
    item$.valueChanges().pipe(take(1)).subscribe(item =>{
      item$.update({ product: product, quantity : (item ? item.quantity : 0) + change});
    })
  }
}
