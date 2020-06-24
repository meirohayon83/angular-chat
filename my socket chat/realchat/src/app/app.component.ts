import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ChatService]
})
export class AppComponent implements OnInit {
  
  authenticate: boolean = false; 

  user: String;
  room: String;
  messageText: String;
  messageArray: Array<{ user: String, message: String }> = []
  
  
  
  constructor(private chatService: ChatService) {}

    ngOnInit() {

    

    this.chatService.initSocket();
    this.chatService.NewUserJoined().subscribe(data => { this.messageArray.push(data) })
    this.chatService.userLeftRoom().subscribe(data => { this.messageArray.push(data) })
    this.chatService.newMessageReceived().subscribe(data => { this.messageArray.push(data) })
    console.log(this.messageArray)
     
    }

 join(){

  this.chatService.joinRoom({ user: this.user, room: this.room })
  this.authenticate = true;
}
 leave(){

  this.chatService.leaveRoom({ user: this.user, room: this.room })
  this.authenticate = false;
}

 sendMessage(){
  this.chatService.sendMessage({ user: this.user, room: this.room, message: this.messageText })

  this.messageText = ""

}


}

