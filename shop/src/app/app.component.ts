import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarcalaComponent } from "./navbarcala/navbarcala.component";
import { LogingpageComponent } from "./logingpage/logingpage.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule, RouterModule, NavbarcalaComponent, LogingpageComponent]
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  form!:any
  usernames:string[]=[]
  lastnames:string[]=[]
  Phones:string[]=[]
  emails:string[]=[]

  constructor(private formBuilder:FormBuilder){
     
  }
  ngOnInit(): void {
    this.form=this.formBuilder.group({
      username:[],
      lastname:[],
      Phone:[],
      email:[]
    })
  
  }
  onClick(){
    this.usernames.push(this.form.value.username)
    this.usernames.push(this.form.value.lastname)
    this.usernames.push(this.form.value.email)
    this.usernames.push(this.form.value.Phone)
    console.log(this.usernames);  
  }
}
