import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthService } from '../../app/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
 public authService=inject(AuthService)
        router=inject(Router)
 logout(){
  this.authService.clearTokenLocalStorage()
  this.router.navigateByUrl('Login')
 }
 onhome(){
  if (!this.authService.localstrongfull) {
    this.router.navigateByUrl('home')
  }
  else{
    window.alert("Log in first")
  }
 }
}
