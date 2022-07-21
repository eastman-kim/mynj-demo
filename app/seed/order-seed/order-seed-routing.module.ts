import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderSeedPage } from './order-seed.page';

const routes: Routes = [
  {
    path: '',
    component: OrderSeedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderSeedPageRoutingModule {}
