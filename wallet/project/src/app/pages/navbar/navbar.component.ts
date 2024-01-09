import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { Router, RouterModule } from '@angular/router';
import { ServiceData } from '../../app.service';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
 public authService=inject(AuthService)
 public serviceData=inject(ServiceData)
        router=inject(Router)
 logout(){
  this.authService.clearTokenLocalStorage()
  this.router.navigateByUrl('Login')
 }
 onwallet(){
  if (!this.authService.localstrongfull) {
    this.router.navigateByUrl('Wallet')
  }
  else{
    window.alert("Log in first")
  }
  
 }
 ontransaction(){
  if (!this.authService.localstrongfull) {
    this.serviceData.postTransaction({"id":this.serviceData.decoded.id}).subscribe((data)=>{
      this.authService.transaction=data
      this.authService.sum()
      console.log(this.authService.transaction[0].amount);
    })
    this.router.navigateByUrl('transaction')
  }
  else{
    window.alert("Log in first")
  }

 }
}
