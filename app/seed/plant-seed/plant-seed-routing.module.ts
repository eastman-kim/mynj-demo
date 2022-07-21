import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantSeedPage } from './plant-seed.page';

const routes: Routes = [
  {
    path: '',
    component: PlantSeedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantSeedPageRoutingModule {}
