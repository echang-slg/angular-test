import { dayjs } from '@util';
import { Component, Input, input, Output } from '@angular/core';
import { User, Task, NewTask } from '@model';
import { TaskComponent } from "./task/task.component";
import dummyTasks from "@mock-data/dummy-tasks.json";
import { NewTaskComponent } from "./new-task/new-task.component";


@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks = dummyTasks as Task[];
  @Input() user?: User;
  //user = input.required()

  @Output() startAddTask: boolean = false;

  get selectedUserTasks(): Task[] | null {
    return this.tasks.filter((task: Task) => task.userId === this.user?.id && !task.completed)
  }

  addTask() {
    this.startAddTask = true;
  }

  onCancelAddTask() {
    this.startAddTask = false;
  }

  onAddTask(taskData: NewTask) {
    console.log(taskData);
    this.tasks = [{ ...taskData, id: Math.random(), userId: this.user!.id, completed: false, createdAt: dayjs().utc().toDate() }, ...this.tasks];
    this.startAddTask = false;
  }

}
