import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'customer',
    loadChildren:'./customer/customer.module#CustomerModule'
  },
  {
    path:'orders',
    loadChildren:'./orders/orders.module#OrdersModule'
  },
  {
    path:'messages',
    loadChildren:'./messages/messages.module#MessagesModule'
  },
  {
    path: '',
    redirectTo:'',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
