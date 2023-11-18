import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  s:string=""
  @Output() output = new EventEmitter
  menuLinstItems: any[]=[{
    title:"Home",
    link:"https://github.com"
  },
{
  title:"Google",
  link:"https://google.com"
}]
  defultbackgroundcollor:string="yellow"
  control: boolean = true;
  lname:string=""
  fontsize:number=16
  obj ={
    name : "mahyar",
    age : "21",
    universiti:{
      name:"znu"
    }
  }
  ngOnInit(): void {
    console.log(this.obj);
    
  }
  lastname(even: any) {
    this.s=even.target.value
    this.lname=even.target.value
    
  }
  Firstname(even:any){
    console.log(even);
    
  }
  onhandel() {
    this.control = !this.control;
    this.fontsize++
    this.menuLinstItems.push(this.s)
    this.output.emit(this.lname)
  }
}
