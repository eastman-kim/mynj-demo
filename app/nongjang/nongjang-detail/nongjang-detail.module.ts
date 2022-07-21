import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Pipes } from 'src/app/pipes/pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NongjangDetailPageRoutingModule } from './nongjang-detail-routing.module';
import { NongjangDetailPage } from './nongjang-detail.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NongjangDetailPageRoutingModule,
    Pipes,
    ComponentsModule,
    NgbModule
  ],
  declarations: [NongjangDetailPage]
})
export class NongjangDetailPageModule {}
