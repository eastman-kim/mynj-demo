import { Component, OnInit } from '@angular/core';

import Swiper, { SwiperOptions, Pagination } from 'swiper';

import { Seed } from '../seed.model';
import { SeedService } from '../seed.service';

@Component({
  selector: 'app-order-seed',
  templateUrl: './order-seed.page.html',
  styleUrls: ['./order-seed.page.scss'],
})
export class OrderSeedPage implements OnInit {
  seedList: Seed[];
  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next-unique',
      prevEl: '.swiper-button-prev-unique'
    },
    pagination: { clickable: true },
    scrollbar: { draggable: true }
  };

  constructor(
    private seedService: SeedService
  ) { }

  ngOnInit() {
    this.seedList = this.seedService.getAllSeeds().slice(1,3);
    Swiper.use([Pagination]);
  }

}
