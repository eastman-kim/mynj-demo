import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';

import { SeedPageRoutingModule } from './seed-routing.module';
import { SeedPage } from './seed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeedPageRoutingModule,
    SwiperModule
  ],
  declarations: [SeedPage],
})
export class SeedPageModule {}
