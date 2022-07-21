import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';

import { OrderSeedPageRoutingModule } from './order-seed-routing.module';
import { OrderSeedPage } from './order-seed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderSeedPageRoutingModule,
    SwiperModule
  ],
  declarations: [OrderSeedPage]
})
export class OrderSeedPageModule {}
