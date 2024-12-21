import { Component, Input, input, computed, signal, Output, output, EventEmitter } from '@angular/core';
import { User } from '../models';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  /*
  users: User[] = dummyUserData as User[];
  selectedUser = signal(this.users[0]);    //use signal to track state change

  imagePath = computed(() => `assets/images/${this.selectedUser().avatar}`)

  // if not use signal, use this getter function to computer
  get imageAvatar() {
    return `assets/images/${this.selectedUser().avatar}`;
  }

  onClickUser() {
    const randomIndex = Math.floor(Math.random() * this.users.length);
    this.selectedUser.set(this.users[randomIndex]);
  }

  */

  // @Input({ required: true }) avatar!: string;
  @Input({ required: true }) id!: number;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) selected!: boolean;
  // @Output() select = new EventEmitter<number>();
  select = output<number>();

  avatar = input.required();   // using signal

  imagePath = computed(() => `assets/images/${this.avatar()}`)

  onClickUser() {
    this.select.emit(this.id);
  }
}
