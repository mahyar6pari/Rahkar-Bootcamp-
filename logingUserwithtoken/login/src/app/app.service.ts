import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

@Injectable({
    providedIn: "root"
  })
  export class ServiceData{
    rigister:any=''
    http=inject(HttpClient)
    postregsterdata(data:any){
        return this.http.post(`http://localhost:4000/api/senddata`,data)
    }
    postlogindata(data:any){
      return this.http.post(`http://localhost:4000/api/checkdata`,data)
  }

    }
  
    