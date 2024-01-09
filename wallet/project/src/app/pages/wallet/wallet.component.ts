import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServiceData } from '../../app.service';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.scss'
})
export class WalletComponent {
  fb=inject(FormBuilder)
  router=inject(Router)
  public servise=inject(ServiceData)
  public authService=inject(AuthService)
  data=[]
form=this.fb.group({
  id:[0],
  Money:[]
})
  onsubmit(){
    this.form.patchValue({
      id: this.servise.decoded.id
    })
    console.log(this.form.value)
    this.servise.postmoney(this.form.value).subscribe((data)=>{
      console.log(data);
      this.servise.postTransaction({"id":this.servise.decoded.id}).subscribe((data)=>{
        this.authService.transaction=data
        this.authService.sum()
        console.log(this.authService.transaction[0].amount);
      })
      this.router.navigateByUrl('transaction')
    })
    
    
  }
}
