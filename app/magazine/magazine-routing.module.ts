import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MagazinePage } from './magazine.page';

const routes: Routes = [
  {
    path: '',
    component: MagazinePage
  },
  {
    path: 'monthly-magazine',
    loadChildren: () => import('./monthly-magazine/monthly-magazine.module').then( m => m.MonthlyMagazinePageModule)
  },
  {
    path: 'magazine-in-progress',
    loadChildren: () => import('./magazine-in-progress/magazine-in-progress.module').then( m => m.MagazineInProgressPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MagazinePageRoutingModule {}
