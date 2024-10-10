import { Component, Input } from '@angular/core';
import { type Task } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
 @Input({required: true}) task!: Task;
}
