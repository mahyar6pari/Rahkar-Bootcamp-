import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Router, RouterModule } from '@angular/router';
import { jwtDecode } from "jwt-decode";
import { AuthService } from '../../auth.service';
import { ServiceData } from '../../app.service';
@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule,RouterModule,],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.scss'
})
export class LoginpageComponent {
   
   
  fb=inject(FormBuilder)
  authService=inject(AuthService)
  serviceData=inject(ServiceData)
  router=inject(Router)
  
  form=this.fb.group({
    mobile:[],
    password:[]
  })
  onsubmit(){
    console.log(this.form.value);
   this.serviceData.postlogindata(this.form.value).subscribe((data)=>{
    this.serviceData.decoded = jwtDecode(data as string);
    console.log(this.serviceData.decoded);
    if (data!='PasswordIsWrong' && data!='NotAccount') {
      this.authService.setTokenLocalStorage(data as string)
      this.router.navigateByUrl('Wallet')
    }
    else if(data=='PasswordIsWrong'){
      window.alert("Password Is Wrong")
    }
    else if(data=='NotAccount'){
      window.alert("Not Account")
    }
   })
  }
  logout(){
    this.authService.clearTokenLocalStorage()
  }
}
