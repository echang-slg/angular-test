import { Component, Input, input } from '@angular/core';
import { User, Task } from '../models';
import { TaskComponent } from "../task/task.component";

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() user?: User;
  //user = input.required()
  selectedUserTasks: Task[] = this.user?.tasks ?? [];

  ngOnInit(): void {
    this.selectedUserTasks.push({
      id: 1,
      title: "Task 1",
      description: "Description 1",
      completed: false,
      userId: 1
    });
  }

}
