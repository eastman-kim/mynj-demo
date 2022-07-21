import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { MagazineDetailService } from '../magazine-detail.service';
import { MagazineDetail } from '../magazine-detail';

@Component({
  selector: 'app-magazine-in-progress',
  templateUrl: './magazine-in-progress.page.html',
  styleUrls: ['./magazine-in-progress.page.scss'],
})

export class MagazineInProgressPage implements OnInit {
  public magazineId: string;
  public magazineDetail: MagazineDetail;
  public allMagazineDetails;

  constructor(
    private magazineDetailService: MagazineDetailService,
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) {
    // set all magazineDetails
    this.allMagazineDetails = magazineDetailService.getAllMagazineDetail();
    console.log(this.allMagazineDetails);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.magazineDetail = this.magazineDetailService.getMagazineDetail(paramMap.get('magzineId'));
    });}

}
