import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsernameService } from './game.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule,HttpClientModule,RouterModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  usernameService=inject( UsernameService)
  router=inject(Router)
userone:boolean=false
usertwo:boolean=false
fb=inject(FormBuilder)

form1:any|null = this.fb.group({
  name:[]

})
form2:any|null = this.fb.group({
  name:[]
})
click1(){
  this.usernameService.sendnameuser1(this.form1.value.name).subscribe((data)=>{})
  this.usernameService.getusers().subscribe((data)=>{
    console.log(data);
      this.usernameService.users.push(data);
      this.userone=true
      if (this.userone==true && this.usertwo==true) {
        this.router.navigateByUrl('GameForTwo')
      }
  })
  
}
click2(){
  this.usernameService.sendnameuser2(this.form2.value.name).subscribe((data)=>{})
  this.usernameService.getusers().subscribe((data)=>{
      this.usernameService.users.push(data);
    console.log(data);
    this.usertwo=true
    if (this.userone==true && this.usertwo==true) {
      this.router.navigateByUrl('GameForTwo')
    }
  })
  
}

}