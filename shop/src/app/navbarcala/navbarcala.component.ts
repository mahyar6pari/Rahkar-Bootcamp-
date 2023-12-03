import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GetnameService } from '../logingpage/logingpage.service';

@Component({
  selector: 'app-navbarcala',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navbarcala.component.html',
  styleUrl: './navbarcala.component.scss'
})
export class NavbarcalaComponent {

  constructor(public authService: GetnameService) {}
}
