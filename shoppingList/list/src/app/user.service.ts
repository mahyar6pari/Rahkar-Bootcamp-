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
       return this.http.post(`${this.baseUrl}/addtitle`,data)
    }
    getdata(): Observable<any> {
      return this.http.get(`${this.baseUrl}/senddatas`)
    }
    donedata(id:number): Observable<any> {
      return this.http.get(`${this.baseUrl}/done/${id}`)
    }
    deletdata(id:number): Observable<any> {
      return this.http.get(`${this.baseUrl}/dalet/${id}`)
    }
    editedata(id:number): Observable<any> {
      return this.http.get(`${this.baseUrl}/edite/${id}`)
    }
    updatedata(data:ITask,id:number): Observable<any> {
      return this.http.put(`${this.baseUrl}/update/${id}`,data)
    }
    }
  
    