import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  constructor(private router:Router,
    private activatedRoute:ActivatedRoute){

  }
  users:any[]=[
    {
      id:1,
      name:"mahyar",
      university:"zanjan"
    },
    {
      id:2,
      name:"ali",
      university:"zanjan"
    },
    {
      id:3,
      name:"mmd",
      university:"zanjan"
    },
  ]
item: any;
}
