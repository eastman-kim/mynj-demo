import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonthlyMagazinePage } from './monthly-magazine.page';

const routes: Routes = [
  {
    path: '',
    component: MonthlyMagazinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonthlyMagazinePageRoutingModule {}
