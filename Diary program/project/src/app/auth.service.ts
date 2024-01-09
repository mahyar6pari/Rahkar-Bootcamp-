import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
@Injectable({
    providedIn: "root"
  })
  export class ServiceData{
    titles:any
    update:any
    display:boolean=false
    http=inject(HttpClient)
    postsendtxt(data:any) : Observable<any>{
       return this.http.post(`http://localhost:4000/api/creat`,data)
    }
    gettxt() : Observable<any>{
      return this.http.get(`http://localhost:4000/api/read`)
   }
   postdelet(data:any) : Observable<any>{
    return this.http.post(`http://localhost:4000/api/dalet`,data)
 }
   postset(data:any) : Observable<any>{
    return this.http.post(`http://localhost:4000/api/edite`,data)
}
   postupdate(data:any) : Observable<any>{
    return this.http.put(`http://localhost:4000/api/update`,data)
}
  
    }
  
    