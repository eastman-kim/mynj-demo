import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
          },
          {
            path: 'profile',
            loadChildren: () => import('../home/profile/profile.module').then( m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: 'nongjang',
        loadChildren: () => import('../nongjang/nongjang.module').then (m => m.NongjangPageModule)
      },
      {
        path: 'seed',
        children: [
          {
            path: '',
            loadChildren: () => import('../seed/seed.module').then( m => m.SeedPageModule)
          },
          {
            path: 'order-seed',
            loadChildren: () => import('../seed/order-seed/order-seed.module').then( m => m.OrderSeedPageModule )
          },
          {
            path: ':seedId',
            loadChildren: () => import('../seed/plant-seed/plant-seed.module').then( m => m.PlantSeedPageModule)
          }
        ]
      },
      {
        path: 'town',
        children: [
          {
            path: '',
            loadChildren: () => import('../town/town.module').then( m => m.TownPageModule)
          },
          {
            path: ':feedId',
            loadChildren: () => import('../town/feed-detail/feed-detail.module').then( m => m.FeedDetailPageModule)
          }
        ]
      },
      {
        path: 'magazine',
        children: [
          {
            path: '',
            loadChildren: () => import('../magazine/magazine.module').then(m => m.MagazinePageModule)
          },
          {
            path: ':magazineId',
            loadChildren: () => import('../magazine/monthly-magazine/monthly-magazine.module').then( m => m.MonthlyMagazinePageModule)
          }
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
