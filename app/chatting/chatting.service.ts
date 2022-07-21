import { Injectable } from '@angular/core';
import { Chat } from './chatting.model';

@Injectable({
  providedIn: 'root'
})
export class ChattingService {
  chats: Chat[] = [
    {
      id: 'c1',
      nickname: '뾰로롱감자',
      datetime: '2022-04-14',
      imgUrl: '../../assets/images/pic1.jpg',
      lastMessage: '도착했는데 너무 맛있어요~ 감사합니다!'
    },
    {
      id: 'c2',
      nickname: '후루룩국수',
      datetime: '2022-04-13',
      imgUrl: '../../assets/images/pic2.jpg',
      lastMessage: '이거 언제까지 해야되냐... 죽것네'
    },
    {
      id: 'c3',
      nickname: '미친거아냐',
      datetime: '2022-04-10',
      imgUrl: '../../assets/images/pic3.jpg',
      lastMessage: '와 오렌지 먹어본지 너무 어렌지'
    }
  ];

  constructor() { }

  getAllChats() {
    return [...this.chats];
  }
}
