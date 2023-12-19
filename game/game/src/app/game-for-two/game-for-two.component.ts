import { Component, inject } from '@angular/core';
import { UsernameService } from '../game/game.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-for-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-for-two.component.html',
  styleUrl: './game-for-two.component.scss'
})
export class GameForTwoComponent {
public  usernameService=inject(UsernameService)
control=false
userOneScore=0
userTwoScore=0
clickrandomNumber(){
  if (this.userOneScore<5 && this.userTwoScore<5) {

  this.usernameService.getRandomNumber().subscribe((data:any)=>{
    this.control=true
   this.usernameService.number=data.number
   if ( this.usernameService.number<4) {
    this.userOneScore++
   }
   else if( this.usernameService.number<=6 &&  4<=this.usernameService.number){
    this.userTwoScore++
   }
    
  })
}
}
}
