
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import dummyUserData from '@mock-data/dummy-users.json';
import { User } from '@model';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent, CommonModule, RouterOutlet, RouterLink, RouterLinkActive,
    UserComponent,
    TasksComponent
],
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
    //console.log('selected user id: ', id);
    this.selectedUserId = id as number;
  }
}
