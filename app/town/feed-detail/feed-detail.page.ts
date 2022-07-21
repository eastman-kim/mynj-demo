import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

import { FeedService } from '../feed.service';
import { Feed } from '../feed.model';

@Component({
  selector: 'app-feed-detail',
  templateUrl: './feed-detail.page.html',
  styleUrls: ['./feed-detail.page.scss'],
})

export class FeedDetailPage implements OnInit {
  feed: Feed;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private feedService: FeedService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('feedId')) {
        this.navCtrl.navigateBack('/tabs/town/');
        return;
      }
      this.feed = this.feedService.getFeed(paramMap.get('feedId'));
    });
  }

}
