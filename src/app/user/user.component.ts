import { Component } from '@angular/core';
import { User } from '../models';
import dummyUserData from './dummy-users.json';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  users: User[] = dummyUserData as User[];
  selectedUser = this.users[0];

}
