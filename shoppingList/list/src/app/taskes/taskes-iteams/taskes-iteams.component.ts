import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Itaskdata } from '../../typings/taskesgetdata.model';

@Component({
  selector: 'app-taskes-iteams',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './taskes-iteams.component.html',
  styleUrl: './taskes-iteams.component.scss'
})
export class TaskesIteamsComponent {
  @Input() task!: Itaskdata;
  @Output() edited = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() done = new EventEmitter();
}
