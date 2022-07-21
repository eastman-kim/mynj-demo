import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MagazineInProgressPageRoutingModule } from './magazine-in-progress-routing.module';

import { MagazineInProgressPage } from './magazine-in-progress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MagazineInProgressPageRoutingModule
  ],
  declarations: [MagazineInProgressPage]
})
export class MagazineInProgressPageModule {}
