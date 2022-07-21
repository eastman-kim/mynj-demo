import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MagazineInProgressPage } from './magazine-in-progress.page';

const routes: Routes = [
  {
    path: '',
    component: MagazineInProgressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MagazineInProgressPageRoutingModule {}
