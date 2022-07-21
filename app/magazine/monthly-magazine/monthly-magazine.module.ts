import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonthlyMagazinePageRoutingModule } from './monthly-magazine-routing.module';

import { MonthlyMagazinePage } from './monthly-magazine.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonthlyMagazinePageRoutingModule,
    ComponentsModule
  ],
  declarations: [MonthlyMagazinePage]
})
export class MonthlyMagazinePageModule {}
