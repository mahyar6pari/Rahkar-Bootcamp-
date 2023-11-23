import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  color:string=""
  name :string=""
  selectedID:number=100
  navebarli:string[]=[]
  getname(event:any){
    this.name=event.target.value

  }
  
  
  onhanking(){
    this.navebarli.push(this.name)
  }
  ondone(even:number){
    this.selectedID=even

  }
  onpack(even:any){
    this.navebarli.splice(even,1)
  }
}
