import { Component, Input, Output } from '@angular/core';
import { User, Task, NewTask } from '@model';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  constructor(private tasksService: TasksService) {}

  @Input() user?: User;
  //user = input.required()

  @Output() startAddTask: boolean = false;

  get selectedUserTasks(): Task[] | null {
    return this.tasksService.geUserTasks(this.user!);
  }

  addTask() {
    this.startAddTask = true;
  }

  onCancelAddTask() {
    this.startAddTask = false;
  }

  onAddTask(taskData: NewTask) {
    console.log(taskData);
    this.tasksService.addTask(taskData, this.user!);
    this.startAddTask = false;
  }

}
