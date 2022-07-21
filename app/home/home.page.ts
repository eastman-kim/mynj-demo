import { Component, OnInit } from '@angular/core';
import Swiper, { SwiperOptions, Pagination } from 'swiper';
import { Seed } from '../seed/seed.model';
import { SeedService } from '../seed/seed.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  items: Seed[];
  swiperConfig: SwiperOptions = {
    slidesPerView: 3,
    scrollbar: { draggable: true }
  };

  constructor(
    private seedService: SeedService
  ) { }

  ngOnInit() {
    this.items = this.seedService.getAllSeeds();
  }

  onClickCategory() {
    console.log('button clicked');
  }
}
