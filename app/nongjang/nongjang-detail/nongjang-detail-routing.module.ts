import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NongjangDetailPage } from './nongjang-detail.page';

const routes: Routes = [
  {
    path: '',
    component: NongjangDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NongjangDetailPageRoutingModule {}
