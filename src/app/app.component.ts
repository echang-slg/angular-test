
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent, CommonModule, RouterOutlet, RouterLink, RouterLinkActive,
    UserComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-test';
}
