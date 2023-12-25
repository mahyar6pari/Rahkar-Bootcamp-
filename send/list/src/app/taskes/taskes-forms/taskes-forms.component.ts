import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceData } from '../../user.service';
import { ITask } from '../../typings/taskes.model';
import { TaskesIteamsComponent } from "../taskes-iteams/taskes-iteams.component";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-taskes-forms',
    standalone: true,
    templateUrl: './taskes-forms.component.html',
    styleUrl: './taskes-forms.component.scss',
    imports: [CommonModule, FormsModule, ReactiveFormsModule, TaskesIteamsComponent,RouterModule]
})
export class TaskesFormsComponent {
fb=inject(FormBuilder)
serviceData=inject(ServiceData)


form=this.fb.group({
  title:['']
})


  submit(){

this.serviceData.postdata(this.form.value as ITask).subscribe((data)=>{
  console.log(this.form.value as ITask);
})

//this.serviceData.getdatabes().subscribe((data)=>{

//})
this.serviceData.getdata().subscribe((data)=>{
  this.serviceData.titles=data
  console.log(this.serviceData.titles);
 
})

  }
}
