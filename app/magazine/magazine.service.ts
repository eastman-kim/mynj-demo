import { Injectable } from '@angular/core';
import { Magazine } from './magzine.model';

@Injectable({
  providedIn: 'root'
})
export class MagazineService {
  magazineList: Magazine[] = [
    {
      id: 'm1',
      title: 'April',
      date: '2022.04',
      imgUrl: '../../assets/images/pic1.jpg',
      description: '방울토마토 키우기'
    }
  ];

  constructor() { }

  getAllMagazines() {
    return [...this.magazineList];
  }

  getMagazine(id: string) {
    return {...this.magazineList.find(m => m.id === id)};
  }
}
