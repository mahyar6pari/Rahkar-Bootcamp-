import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from './mahsol.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-mahsol',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mahsol.component.html',
  styleUrl: './mahsol.component.scss'
})
export class MahsolComponent {
  items:any=[]
  constructor(private mahsol:Card, private router: Router){
    this.items = mahsol.gets()
    console.log(this.items);
    console.log(this.items[0].image);
  }
  onclick(id:any){
    this.router.navigate(['Mahsol', id]);
  }

}
