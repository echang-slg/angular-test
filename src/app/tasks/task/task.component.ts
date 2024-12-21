import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '@model';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../../shared/card/card.component";
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [CommonModule, CardComponent],    //should be imported in the app.module
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  constructor(private tasksService: TasksService) { }

  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<Task>();

  onCompleteTask() {
    this.tasksService.completeTask(this.task.id);
  }
}
