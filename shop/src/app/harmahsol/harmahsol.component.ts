import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../mahsol/mahsol.service';

@Component({
  selector: 'app-harmahsol',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './harmahsol.component.html',
  styleUrl: './harmahsol.component.scss'
})
export class HarmahsolComponent {

  id: any;
  constructor(private route: ActivatedRoute,public mahsol:Card) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    console.log(this.id);
    for (let index = 0; index <this.mahsol.list.length; index++) {
      if (this.id==this.mahsol.list[index].id) {
        this.mahsol.mahsolentekhabi(this.mahsol.list[index])
      }
    }
  }
}
