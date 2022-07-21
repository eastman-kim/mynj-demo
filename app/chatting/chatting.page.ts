import { Component, OnInit } from '@angular/core';
import { Chat } from './chatting.model';
import { ChattingService } from './chatting.service';

@Component({
  selector: 'app-chatting',
  templateUrl: './chatting.page.html',
  styleUrls: ['./chatting.page.scss'],
})
export class ChattingPage implements OnInit {
  chats: Chat[];

  constructor(
    private chatService: ChattingService
  ) { }

  ngOnInit() {
    this.chats = this.chatService.getAllChats();
  }

}
