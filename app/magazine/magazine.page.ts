import { Component, OnInit } from '@angular/core';
import { MagazineService } from './magazine.service';
import { Magazine } from './magzine.model';
import Swiper, { SwiperOptions, Pagination } from 'swiper';
@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.page.html',
  styleUrls: ['./magazine.page.scss'],
})
export class MagazinePage implements OnInit {
  magazines: Magazine[];
  public swiperConfig: SwiperOptions = {
    pagination: true,
    slidesPerView: 2.2,
    loop: true,
  };

  constructor(private magazineService: MagazineService) { }

  ngOnInit() {
    this.magazines = this.magazineService.getAllMagazines();
    Swiper.use([Pagination]);
  }

}
