import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../../typings/taskes.model';

@Component({
  selector: 'app-taskes-iteams',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './taskes-iteams.component.html',
  styleUrl: './taskes-iteams.component.scss'
})
export class TaskesIteamsComponent {
  @Input() task!: ITask;
  @Output() edited = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() done = new EventEmitter();
}
