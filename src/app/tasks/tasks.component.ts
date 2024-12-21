import { Component, Input, input } from '@angular/core';
import { User, Task } from '@model';
import { TaskComponent } from "./task/task.component";
import dummyTasks from "@mock-data/dummy-tasks.json";

const tasks = dummyTasks as Task[];

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() user?: User;
  //user = input.required()
  get selectedUserTasks(): Task[] | null {
    return tasks.filter((task: Task) => task.userId === this.user?.id)
  }
}
