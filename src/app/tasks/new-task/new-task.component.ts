import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
[x: string]: any;

@Output() cancel = new EventEmitter<void>();
@Output() add = new EventEmitter<NewTaskData>();

enteredTitle = '';
entredSummary = '';
enteredDate='';

onCancel(){
  this.cancel.emit();
}
onSubmit(){
  this.add.emit({
    title: this.enteredTitle,
    summary: this.entredSummary,
    dueDate: this.enteredDate,
  })
}

}
