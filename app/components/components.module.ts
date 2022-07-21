import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SearchBarComponent } from './search-bar/search-bar.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [
    SearchBarComponent
  ],
  exports: [
    SearchBarComponent
  ],
})
export class ComponentsModule {}
