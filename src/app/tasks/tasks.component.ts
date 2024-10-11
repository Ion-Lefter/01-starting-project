import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NgFor, NgIf } from '@angular/common';
import { type NewTaskData, Task } from './task/task.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})

export class TasksComponent {

  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  isAddingTask: boolean = false;
 
  constructor(private tasksService: TasksService){
      this.tasksService = tasksService;
  }

  tracByTaskId(index: number, task: Task): string{
    return task.id;
  }

  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId)
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCancelAddTask(){
    this.isAddingTask=false;
  }

}
