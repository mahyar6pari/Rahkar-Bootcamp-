import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.scss'
})
export class FormArrayComponent {
  items:any[]=[]
  telephone:any[]=[]
  arr:any= new FormArray([
    new FormControl(),
    new FormControl(),
    new FormControl(),
    new FormControl(),
    new FormControl(),
    new FormControl(),
  ]);
  creatOnclick(){
    this.items.push(this.items.length)
    
  }
  deletOnclick(even:any){
    this.items.splice(even,1)
  }
  input(even:any){
    this.arr.patchValue([even.target.value])
    console.log(this.arr.value);
    
  }
 
}


