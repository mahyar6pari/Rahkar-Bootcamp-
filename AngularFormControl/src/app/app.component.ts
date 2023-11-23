import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, BodyComponent,FooterComponent,FormsModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  username = new FormControl();
  password = new FormControl();
  onClick(){
    console.log("username:",this.username.value,"password:",this.password.value);
    
  }
/*  constructor(private formBuilder:FormBuilder){
    console.log("thi");
     
  }
  ngOnInit(): void {
    this.formBuilder.group({
      username:["alireza"],
      password:[""]
    })
  
  }*/
}
