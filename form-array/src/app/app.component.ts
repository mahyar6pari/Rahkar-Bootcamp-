import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { FormbulderComponent } from './formbulder/formbulder.component';
import { FormArrayComponent } from './form-array/form-array.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent,FormsModule,ReactiveFormsModule,RouterModule,BootstrapComponent,FormbulderComponent,FormArrayComponent ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
