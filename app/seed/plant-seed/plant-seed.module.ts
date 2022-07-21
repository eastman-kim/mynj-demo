import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantSeedPageRoutingModule } from './plant-seed-routing.module';

import { PlantSeedPage } from './plant-seed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantSeedPageRoutingModule
  ],
  declarations: [PlantSeedPage]
})
export class PlantSeedPageModule {}
