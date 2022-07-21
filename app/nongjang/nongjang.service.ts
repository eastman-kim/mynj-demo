import { Injectable } from '@angular/core';
import { Nongjang } from './nongjang.model';
import { SeedService } from '../seed/seed.service';

@Injectable({
  providedIn: 'root'
})

export class NongjangService {
  nongjangs: Nongjang[] = [
    {
      id: 'n1',
      location: '서울 강동구',
      farmTitle: '서울에서수박이',
      farmSubtitle: '수박 농사 1일차',
      areaSize: 10,
      imgUrl: '../../assets/images/watermelon.jpg'
    },
    {
      id: 'n2',
      farmTitle: '오렌만이야',
      location: '쌀나라 가리보',
      farmSubtitle: '오렌지 농사 2대째',
      areaSize: 32560,
      imgUrl: '../../assets/images/orange.jpg'
    },
    {
      id: 'n3',
      location: '충남 논산',
      farmTitle: '논산충남맞지?',
      farmSubtitle: '딸기는 설향',
      areaSize: 635,
      imgUrl: '../../assets/images/strawberry.jpg'
    },
    {
      id: 'n4',
      location: '충북 청주',
      farmTitle: '동쪽농부',
      farmSubtitle: '사과 농사 10년차',
      areaSize: 312,
      imgUrl: '../../assets/images/apple.jpg'
    }
  ];


  constructor(
    private seedService: SeedService
  ) { }

  getAllNongjangs() {
    return [...this.nongjangs];
  }

}
