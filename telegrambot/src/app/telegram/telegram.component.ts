import { Component, inject } from '@angular/core';
import { GetApiTelegram} from './telegram-service.service';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-telegram',
  standalone: true,
  imports: [FormsModule,CommonModule, HttpClientModule,ReactiveFormsModule],
  templateUrl: './telegram.component.html',
  styleUrl: './telegram.component.scss'
})
export class TelegramComponent {
  user_id:number[]=[268569464]
  getApiTelegram=inject(GetApiTelegram)
  formBuilder=inject(FormBuilder)
    form:FormGroup=this.formBuilder.group({
    text:["",Validators.required],
    photourl:["",Validators.required],
    caption:["",Validators.required],
    tedadTosater:["",Validators.required],
    items:this.formBuilder.array([])
  })
  ngOnInit(): void {
    this.add()
  }
  get items():FormArray{
    return this.form.get('items') as FormArray;
  }
  onclick(){
    this.getApiTelegram.SendMessage(this.user_id[0],this.form.value.text,this.iconTelegram(this.items.value)).subscribe((data)=>{})
    this.getApiTelegram.sendPhoto(this.user_id[0],this.form.value.photourl,this.form.value.caption).subscribe((data)=>{})  
  }
  add(){
    this.items.push(this.formBuilder.group({
      name:[""]
    }))
  }
  remove(event:any){
    this.items.removeAt(event)
  }
  iconTelegram(list:any[]){
  let  z=0
  let  telegramicon:any=[]
  let  telegramButton:any=[]
  let  tel:any=[]
  if(this.form.value.tedadTosater>1){
  for (let i = 1; i <= Math.floor(list.length/this.form.value.tedadTosater); i++) {
 for (let k = 0; k < this.form.value.tedadTosater; k++) { 
  telegramicon.push(
    {text:list[z].name,callback_data:list[z].name}
  )
    z=z+1  
  
    }

    telegramButton.push(
      telegramicon
    ) 
  }
}
else if(this.form.value.tedadTosater==1){
  list.forEach((element) => { 
    z=z+1
    telegramButton.push(
      [
        {text:element.name,callback_data:element.name}
      ]
    )
  })
}


  while (z!=list.length) {
    tel.push(
      {text:list[z].name,callback_data:list[z].name}
    
    )
    z=z+1   
  }
  if (tel.length>0) {
  telegramButton.push(
    tel
  ) 
} 
 return telegramButton
}
}