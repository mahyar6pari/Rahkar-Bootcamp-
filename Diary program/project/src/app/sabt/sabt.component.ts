import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ServiceData } from '../auth.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sabt',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule,RouterModule],
  templateUrl: './sabt.component.html',
  styleUrl: './sabt.component.scss'
})
export class SabtComponent {
  fb=inject(FormBuilder)
  public serviceData=inject(ServiceData)
  router=inject(Router)
  form:FormGroup=this.fb.group({
    title:['',Validators.required],
    id:['',Validators.required]
  })
  ngOnInit(): void {
    if (this.serviceData.display==true) {
      this.form.get('title')?.setValue(this.serviceData.update[0].title)
    }
  }
  onclick(){
    console.log(this.form.value);
    this.serviceData.postsendtxt(this.form.value).subscribe((data)=>{
      console.log(data);
      this.router.navigateByUrl('List')
    })
  }
  onupdate(){
    this.form.patchValue({
      id:this.serviceData.update[0].id
    }) 
    console.log(this.form.value);
    
    this.serviceData.postupdate(this.form.value).subscribe((data)=>{
      this.serviceData.display=false
      this.router.navigateByUrl("")
    })
  }
}
