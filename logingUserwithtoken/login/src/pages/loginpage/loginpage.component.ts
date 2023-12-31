import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceData } from '../../app/app.service';
import { AuthService } from '../../app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.scss'
})
export class LoginpageComponent {
  fb=inject(FormBuilder)
  authService=inject(AuthService)
  serviceData=inject(ServiceData)
  router=inject(Router)
  form=this.fb.group({
    name:[],
    password:[]
  })
  onsubmit(){
   this.serviceData.postlogindata(this.form.value).subscribe((data)=>{
    console.log(data);
    if (data!='PasswordIsWrong' && data!='NotAccount') {
      this.authService.setTokenLocalStorage(data as string)
      this.router.navigateByUrl('home')
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
