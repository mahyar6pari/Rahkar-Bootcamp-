import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class GetnameService{
    http=inject(HttpClient)
    gethttp(){
      return  this.http.get('https://jsonplaceholder.typicode.com/users/1/posts')
    }
  }