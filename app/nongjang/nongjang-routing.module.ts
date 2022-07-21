import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NongjangPage } from './nongjang.page';

const routes: Routes = [
  {
    path: '',
    component: NongjangPage
  },
  {
    path: 'nongjang-detail',
    loadChildren: () => import('./nongjang-detail/nongjang-detail.module').then( m => m.NongjangDetailPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NongjangPageRoutingModule {}
