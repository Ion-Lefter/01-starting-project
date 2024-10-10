import { Component, computed, EventEmitter, Input, Output } from '@angular/core';

 import { DUMMY_USERS } from '../dummy_users';

 const randomIndex  = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  @Input({required: true}) user!:{
    id: string;
    avatar: string;
    name: string;
  };
  @Output() select = new EventEmitter<string>();

  imagePath = computed(() => {
    return 'assets/users/' + this.user.avatar;
  });

  // get imagePath(){
  //   return 'assets/users/' + this.avatar;
  // }


  onSelectUser(){
      this.select.emit(this.user.id);
  }
}
