import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { ITask } from "./typings/taskes.model";
import { Observable } from "rxjs";
import { environment } from "../environments/environment.development";

@Injectable({
    providedIn: "root"
  })
  export class ServiceData{
    titles:any
    http=inject(HttpClient)
    baseUrl=environment.apiBaseUrl
    postdata(data:ITask): Observable<any> {
       return this.http.post(`${this.baseUrl}`,data)
    }
    getdata(){
      return this.http.get(`${this.baseUrl}/send`)
    }
    getdatabes(){
      return this.http.get(`http://localhost:4000/api/readdata`)
    }
    senddatabase(){
      
    }
    }
  
    