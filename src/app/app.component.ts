
import { Component } from '@angular/core';
import dummyUserData from '@mock-data/dummy-users.json';
import { User } from '@model';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-test';
  users: User[] = dummyUserData as User[];
  selectedUserId?: number;

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId);
  }

  onSelectUser(id: any) {
    this.selectedUserId = id as number;
  }
}
