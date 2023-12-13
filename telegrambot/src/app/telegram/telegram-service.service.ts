import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class GetApiTelegram{
    http=inject(HttpClient)
    SendMessage(user_id:number, message:string,reply_markup:any){
      var data={
        chat_id:user_id,
        text:message,
        reply_markup:{keyboard:reply_markup}
      }
      return this.http.post(`https://api.telegram.org/bot6736513291:AAE9T5-djlZ7CEZxb2HRyOrCENxeYoILtms/sendMessage`,data)
    } 
    sendPhoto(user_id:number,photourl:string,caption:string){
      var data={
        chat_id:user_id,
        photo:photourl,
        caption:caption
      }
      return this.http.post(`https://api.telegram.org/bot6736513291:AAE9T5-djlZ7CEZxb2HRyOrCENxeYoILtms/sendPhoto`,data)
    }
  }
