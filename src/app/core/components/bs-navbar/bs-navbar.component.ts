import { AppUser } from 'shared/models/app-user';
import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Observable } from 'rxjs';
import { ShoppingCart } from 'shared/models/shopping-cart';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit{

  AppUser : AppUser;
  cart$: Observable<ShoppingCart>;
  constructor(private shoppingCartService: ShoppingCartService,private auth: AuthService) { 
   
    
  }

  async ngOnInit(){
    this.auth.AppUser$.subscribe(AppUser => this.AppUser = AppUser);
    this.cart$ = (await this.shoppingCartService.getCart());
  }

  logout(){
    this.auth.logout();
  }

}
