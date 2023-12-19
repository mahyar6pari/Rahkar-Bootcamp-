import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UsernameService{
    http=inject(HttpClient)
    number:any=''
    users:any=[]
    sendnameuser1(name:any){
        var data={
            name: name
          }
      return  this.http.post(`http://localhost:3000/`,data,{headers: new HttpHeaders({"Content-Type": "Application/json"})})
    
    }
    sendnameuser2(name:any){
        var data={
            name:name
          }
     return  this.http.post(`http://localhost:3000`,data,{headers: new HttpHeaders({"Content-Type": "Application/json"})})
    }
  
  getusers(): Observable<any> {

    return this.http.get("http://localhost:3000/names")
  }
  getRandomNumber(){
    return this.http.get("http://localhost:3000/number")
  } 

}