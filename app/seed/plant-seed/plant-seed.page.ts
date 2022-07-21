import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { SeedService } from '../seed.service';
import { Seed } from '../seed.model';

@Component({
  selector: 'app-plant-seed',
  templateUrl: './plant-seed.page.html',
  styleUrls: ['./plant-seed.page.scss'],
})
export class PlantSeedPage implements OnInit {
  seed: Seed;
  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private seedService: SeedService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('seedId')) {
        this.navCtrl.navigateBack('/tabs/seed/order-seed');
        return;
      }
      this.seed = this.seedService.getOrderableSeed(paramMap.get('seedId'));
    });
  }
}
