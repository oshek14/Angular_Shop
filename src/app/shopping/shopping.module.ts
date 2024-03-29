import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CheckOutComponent } from './components/check-out/check-out.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { ProductFilterComponent } from './components/products/product-filter/product-filter.component';
import { ProductsComponent } from './components/products/products.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from './components/shopping-cart-summary/shopping-cart-summary.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from 'app/shared/services/auth-guard.service';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [
    ProductFilterComponent,
    ShippingFormComponent,
    ShoppingCartSummaryComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path : 'products', component: ProductsComponent},
      {path : 'shopping-cart', component: ShoppingCartComponent},
      {path : 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService]},
      {path : 'order-success/:id', component: OrderSuccessComponent,  canActivate: [AuthGuardService]},
      {path : 'my/orders', component:MyOrdersComponent,  canActivate: [AuthGuardService]},
    ])

  ]
})
export class ShoppingModule { }
