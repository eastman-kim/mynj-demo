import { Component, OnInit } from '@angular/core';
import Swiper, { SwiperOptions, Pagination } from 'swiper';
import { Nongjang } from './nongjang.model';
import { NongjangService } from './nongjang.service';
import { Seed } from '../seed/seed.model';
import { SeedService } from '../seed/seed.service';

@Component({
  selector: 'app-nongjang',
  templateUrl: './nongjang.page.html',
  styleUrls: ['./nongjang.page.scss'],
})
export class NongjangPage implements OnInit {
  nongjangs: Nongjang[];
  seeds: Seed[];
  swiperConfig: SwiperOptions = {
    freeMode: true,
    slidesPerView: 1.6,
    navigation: {
      nextEl: '.swiper-button-next-unique',
      prevEl: '.swiper-button-prev-unique'
    },
    pagination: { clickable: true },
    scrollbar: { draggable: true }
  };

  constructor(
    private nongjangService: NongjangService,
    private seedService: SeedService
  ) { }

  ngOnInit() {
    this.nongjangs = this.nongjangService.getAllNongjangs();
    this.seeds = this.seedService.getAllSeeds();
  }

}
