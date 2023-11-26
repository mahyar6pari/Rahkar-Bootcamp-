import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formbulder',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './formbulder.component.html',
  styleUrl: './formbulder.component.scss'
})
export class FormbulderComponent {
  items:any[]=[]
  name:any[]=[]
  fname:any[]=[]
  itemss:any[]=[]
  constructor(private fb:FormBuilder){}
  form:any|null = this.fb.group({
    firstName:[''],
    lastName:[''],
    telephone:[''],
     email :['']
  })
  

  onClick(){
  if (this.form.value.telephone!="" && this.form.value.firstName!="" && this.form.value.lastName!="" && this.form.value.email!="") {
    this.items.push(this.form.value)
    this.itemss.push(this.form.value)
    this.fname.push(this.form.value.firstName)
  }
}
Click(even:any){
  if (this.items.length==this.itemss.length) {
  this.items.splice(even,1)
  this.itemss.splice(even,1)
  this.fname.splice(even,1)
}
else if (this.items.length!=this.itemss.length) {
  for (let i = 0; i < this.itemss.length; i++) {
    if (this.itemss[i]==this.items[even]) {
      this.items.splice(even,1)
      this.itemss.splice(i,1)
      this.fname.splice(i,1)
    }
    
  }
}
}

search(even:any){
  for (let i = 0; i < this.fname.length; i++) {
    this.items.splice(0,1)
  } 
  for (let i = 0; i < this.fname.length; i++) {
    if (even.target.value=='') {
      this.items.push(this.itemss[i])
    }
    else if (!this.fname[i].search(even.target.value)) {
      this.items.push(this.itemss[i])
    }

    
  }
}
}
