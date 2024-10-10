import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { User, UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy_users';
import { TasksComponent } from './tasks/tasks.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent, UserComponent, TasksComponent, CommonModule]
})
export class AppComponent {
  title = '01-starting-project';
  users = DUMMY_USERS;
  selectedUserId='u1';

  get selectedUser(){
    return this.users.find((user)=>user.id === this.selectedUserId);
  }

  onSelectUser(id: string){
    this.selectedUserId = id;
      console.log('Selcted user with id: ' + id);
  }

  trackById(index: number, user: User): string {
    return user.id;
  }
}
