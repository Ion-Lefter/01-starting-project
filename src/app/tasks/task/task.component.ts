import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  imports: [CardComponent, DatePipe]
})
export class TaskComponent {
 @Input({required: true}) task!: Task;
 @Output() complete = new EventEmitter<string>();
 private taskService = inject(TasksService);

 onCompleteTask(){
  this.taskService.removeTask(this.task.id)
 }
}
