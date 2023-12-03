import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetnameService } from './logingpage.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-logingpage',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule,RouterModule],
  templateUrl: './logingpage.component.html',
  styleUrl: './logingpage.component.scss'
})
export class LogingpageComponent {
  constructor(private fb:FormBuilder,private getnameService:GetnameService, private router: Router){}
  form:any|null = this.fb.group({
    firstName:[''],
    password:[''],
  })
  onclick(){
if ( this.getnameService.get(this.form.value.firstName,this.form.value.password)) {
  this.router.navigateByUrl("/log")
}
else{
  this.router.navigateByUrl("/Logingpage")
  window.alert("You entered the wrong username or password");
}
    
   
    
  }


}



