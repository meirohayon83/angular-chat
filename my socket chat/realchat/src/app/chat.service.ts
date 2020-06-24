import { Injectable } from '@angular/core';

// import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';



@Injectable(
  //  providedIn: 'root'
)

  export class ChatService {

    private url = 'http://localhost:3000';
    private socket; 

    constructor() {}

   initSocket(){  
     
     this.socket = io(this.url);

   }



     
    joinRoom(data){

      this.socket.emit('join', data)
    }

    NewUserJoined(){

      let observable = new Observable<{ user:String ,message:String }>(observer => {

        this.socket.on('new user joined',(data)=>{

          observer.next(data)
        })
        return ()=> {this.socket.disconnect()}
      })
      return observable
    }

    leaveRoom(data){
      this.socket.emit('leave', data)
    }
    userLeftRoom(){

      let observable = new Observable<{ user:String ,message:String }>(observer => {

        this.socket.on('left room',(data)=>{

          observer.next(data)
        })
        return ()=> {this.socket.disconnect()}
      })
      return observable
    }
    sendMessage(data){

      this.socket.emit('message',data)
    }
    newMessageReceived(){
      let observable = new Observable<{ user:String ,message:String }>(observer => {

        this.socket.on('new message',(data)=>{

          observer.next(data)
        })
        return ()=> {this.socket.disconnect()}
      })
      return observable
    }

    


    
    
    

    
  //   export class WeatherService {
 
  //     constructor(private http: HttpClient) {}
  
     
  // getCurrentWeather(city): Observable <any>{
  
  //   return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=8e816f6c3d219b6d985a5301b58ab5fb`)
    
  
  // }
  
    

    


  }























//   constructor(private http: HttpClient) { }

//  getMsg(id: any): Observable <any>{
    
//   return this.http.get(`http://localhost:4555/chatroom/${id}`)
    
//  }



// }

