import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TownPageRoutingModule } from './town-routing.module';
import { TownPage } from './town.page';

import { SharedDirectivesModule } from '../directives/shared-directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TownPageRoutingModule,
    SharedDirectivesModule
  ],
  declarations: [TownPage]
})
export class TownPageModule {}
