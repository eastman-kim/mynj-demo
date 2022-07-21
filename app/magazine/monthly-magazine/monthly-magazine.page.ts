import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Magazine } from '../magzine.model';

@Component({
  selector: 'app-monthly-magazine',
  templateUrl: './monthly-magazine.page.html',
  styleUrls: ['./monthly-magazine.page.scss'],
})
export class MonthlyMagazinePage implements OnInit {
  magazine: Magazine;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController ) {
    }

  ngOnInit() { }
};
