import { Component, OnInit } from '@angular/core';
import { FarmerDetailService } from './farmer-detail.service';
@Component({
  selector: 'app-nongjang-detail',
  templateUrl: './nongjang-detail.page.html',
  styleUrls: ['./nongjang-detail.page.scss'],
})
export class NongjangDetailPage implements OnInit {
  public farmerId: number;
  public ithFarmerDetail;

  constructor(
    private farmerDetailService: FarmerDetailService
  ) {

    // set ithItemDetail
    this.farmerId = 1;
    this.ithFarmerDetail = farmerDetailService.getFarmerDetail(this.farmerId);
    console.log(this.ithFarmerDetail);
  }

  ngOnInit() {
  }

}
