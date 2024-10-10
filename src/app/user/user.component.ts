import { Component, computed, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input({required: true}) user!: User;
  @Output() select = new EventEmitter<string>();

  imagePath = computed(() => {
    return 'assets/users/' + this.user.avatar;
  });

  onSelectUser(){
      this.select.emit(this.user.id);
  }
}
