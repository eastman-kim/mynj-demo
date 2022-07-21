import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeedPage } from './seed.page';

const routes: Routes = [
  {
    path: '',
    component: SeedPage
  },
  {
    path: 'plant-seed',
    loadChildren: () => import('./plant-seed/plant-seed.module').then( m => m.PlantSeedPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeedPageRoutingModule {}
