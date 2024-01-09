import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { ServiceData } from '../../app.service';

@Component({
  selector: 'app-registrationpage',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './registrationpage.component.html',
  styleUrl: './registrationpage.component.scss'
})
export class RegistrationpageComponent {
fb=inject(FormBuilder)
public servise=inject(ServiceData)
router=inject(Router)
form=this.fb.group({
  mobile:[],
  password:[]
})

onclick(){
  console.log(this.form.value);
  this.servise.postregsterdata(this.form.value).subscribe((data)=>{
    console.log(data);
    
    this.servise.rigister=data
    this.router.navigateByUrl('Login')
    
  })
}
}
