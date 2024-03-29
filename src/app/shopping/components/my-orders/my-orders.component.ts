import { AuthService } from 'shared/services/auth.service';
import { OrderService } from 'shared/services/order.service';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {
  orders$;
  
  constructor(
    private authService: AuthService,
    private orderService: OrderService) { 

    authService.user$.subscribe(u=>{
      this.orders$ = orderService.getOrdersByUser(u.uid);  
    });

  

    
    
  }
}
