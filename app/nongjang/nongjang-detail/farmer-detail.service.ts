import { Injectable } from '@angular/core';
import { FarmerDetail } from '../nongjang-detail/farmer-detail';

@Injectable({
  providedIn: 'root',
})
export class FarmerDetailService {
  public farmerDetail: FarmerDetail[] =
    [

      {
        id: 1,
        farmImg: 'assets/images/contents/farm/farm01.jpg',
        title: '김농부씨',
        avatarSubTitle: '농장배지 100개 보유중',
        follower: 0,
        badge: 'assets/images/contents/badge/badge01.png',
        image: 'assets/images/contents/farmer/farmer01.jpg',
        description:
          '논산에서 40년 넘게 딸기 농사만 해온 베테랑 부모님과 함께 킹스베리를 생산하기 시작했어요. 우리 가족이 먹는다는 마음으로 키운 딸기랍니다. ',
        location: '충남 논산시 00농원',
        locationDesc:
          '딸기의 고장 논산은 땅이 비옥하고 일조량이 풍부해 딸기 생산에 적합한 지역입니다. 수경재배 농법으로 땅이 아닌 공중에서 재배되어, 호박벌을 통해 자연수정 되면 킹스베리가 열립니다.',
      },
      {
        id: 2,
        farmImg: 'assets/images/contents/farm/farm02.jpg',
        title: '김농부씨',
        avatarSubTitle: '농장배지 100개 보유중',
        follower: 0,
        badge: 'assets/images/contents/badge/badge02.png',
        image: 'assets/images/contents/farmer/farmer02.jpg',
        description:
          '논산에서 40년 넘게 딸기 농사만 해온 베테랑 부모님과 함께 킹스베리를 생산하기 시작했어요. 우리 가족이 먹는다는 마음으로 키운 딸기랍니다. ',
        location: '충남 논산시 00농원',
        locationDesc:
          '딸기의 고장 논산은 땅이 비옥하고 일조량이 풍부해 딸기 생산에 적합한 지역입니다. 수경재배 농법으로 땅이 아닌 공중에서 재배되어, 호박벌을 통해 자연수정 되면 킹스베리가 열립니다.',
      }
    ];

  constructor() { };

  getFarmerDetail(itemId: number) {
    return {...this.farmerDetail.find(p => p.id === itemId)};
  }

  getAllFarmerDetail() {
    return [...this.farmerDetail];
  }
}
