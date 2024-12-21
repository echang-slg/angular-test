import { Component, Input } from '@angular/core';
import { Task } from '@model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [CommonModule],    //should be imported in the app.module
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
}
