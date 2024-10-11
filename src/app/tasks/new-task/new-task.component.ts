import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  //standalone: true,
  //imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
[x: string]: any;

@Input({required: true}) userId!: string;
@Output() close = new EventEmitter<void>();
//@Output() add = new EventEmitter<NewTaskData>();

enteredTitle = '';
entredSummary = '';
enteredDate='';
private tasksService = inject(TasksService)

onCancel(){
  this.close.emit();
}
onSubmit(){
  // this.add.emit({
  //   title: this.enteredTitle,
  //   summary: this.entredSummary,
  //   dueDate: this.enteredDate,
  // })
  this.tasksService.addTask({
    title: this.enteredTitle,
    summary: this.entredSummary,
    dueDate: this.enteredDate,
     },this.userId);
     this.close.emit();
}

}
