import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class GetnameService{

  isLogin: boolean = false;

    get(name:any,password:any): boolean{
        if (name==="mahyar" && password==="123"){
            this.isLogin = true;
            return true
        }
        return false
    }
    
    getpage(){

    }
    

  }
