import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, ModalController, NavController } from '@ionic/angular';
import Swiper, { SwiperOptions, Pagination } from 'swiper';
import { SeedService } from './seed.service';
import { Seed } from './seed.model';

@Component({
  selector: 'app-seed',
  templateUrl: './seed.page.html',
  styleUrls: ['./seed.page.scss'],
})
export class SeedPage implements OnInit {
  orderedSeeds: Seed[];
  swiperConfig: SwiperOptions = {
    slidesPerView: 1.2,
    pagination: true,
    navigation: {
      nextEl: '.swiper-button-next-unique',
      prevEl: '.swiper-button-prev-unique'
    },
    scrollbar: { draggable: true }
  };

  constructor(
    private seedServie: SeedService,
    private actionSheetCtrl: ActionSheetController,
    private route: Router
  ) { }

  ngOnInit() {
    this.orderedSeeds = this.seedServie.getAllSeeds();
    Swiper.use([Pagination]);
  }

  onAddSeed() {
    this.actionSheetCtrl
      .create({
        header: '씨앗을 선택해주세요',
        buttons: [
          {
            text: '일반 씨앗',
            handler: () => {
              this.route.navigateByUrl('/tabs/seed/order-seed');
            }
          },
          {
            text: '랜덤 씨앗',
            handler: () => {
              this.route.navigateByUrl('/tabs/seed/order-seed');
            }
          },
          {
            text: '취소',
            role: 'cancel'
          }
        ]
      })
      .then(actionSheetEl => {
        actionSheetEl.present();
      });
  }
}
