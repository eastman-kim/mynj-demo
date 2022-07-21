import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';
import { NongjangPageRoutingModule } from './nongjang-routing.module';
import { NongjangPage } from './nongjang.page';

import { ComponentsModule } from '../components/components.module';
import { SharedDirectivesModule } from '../directives/shared-directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NongjangPageRoutingModule,
    SwiperModule,
    ComponentsModule,
    SharedDirectivesModule,
  ],
  declarations: [NongjangPage]
})
export class NongjangPageModule {}
