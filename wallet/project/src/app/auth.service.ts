import { Injectable, inject } from "@angular/core";

@Injectable({
    providedIn: "root"
  })
  export class AuthService{
    sumamount=0
    transaction:any
    localstrongfull:boolean=true
    mytoken="token:"
    setTokenLocalStorage(token:string){
        localStorage.setItem(this.mytoken,token)
        this.localstrongfull=false
    }
    getTokenLocalStorage(){
        localStorage.getItem(this.mytoken)
    }
    clearTokenLocalStorage(){
        localStorage.removeItem(this.mytoken)
        this.localstrongfull=true
    }
    sum(){
        console.log(this.transaction);
        
        this.sumamount=0
        if (this.transaction.length!=0) {
        for (let i = 0; i < this.transaction.length; i++) {
           if (this.transaction[i].type=="add") {
            this.sumamount+=this.transaction[i].amount
           }
           else
           this.sumamount-=this.transaction[i].amount
        }
    }
        return this.sumamount
    }
    }
  