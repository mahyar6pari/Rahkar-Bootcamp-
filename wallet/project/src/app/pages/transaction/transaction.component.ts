import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServiceData } from '../../app.service';
import { AuthService } from '../../auth.service';
@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.scss'
})
export class TransactionComponent {
  display:string=''
  fb=inject(FormBuilder)
  public servise=inject(ServiceData)
  public authService=inject(AuthService)
  data=[]
form=this.fb.group({
  id:[0],
  title:[],
  Money:[]
})
onsubmit(){
  if (this.form.value.title) {
  this.form.patchValue({
    id: this.servise.decoded.id
  })
  console.log(this.form.value);
  this.servise.postMoneySpent(this.form.value).subscribe((data)=>{
    console.log(data);
    this.servise.postTransaction({"id":this.servise.decoded.id}).subscribe((data)=>{
      this.authService.transaction=data
      this.authService.sum()
      console.log(this.authService.transaction[0].amount);
    })
  })
}
else  window.alert("write title");
}
}
