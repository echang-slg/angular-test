import { Injectable } from "@angular/core";
import dummyTasks from "@mock-data/dummy-tasks.json";
import { Task, NewTask, User } from "@model";
import { dayjs } from '@util';

@Injectable({providedIn: 'root'})
export class TasksService {
  private tasks = dummyTasks as Task[];

  geUserTasks(user: User): Task[] | null {
    return this.tasks.filter((task: Task) => task.userId === user.id && task.completed === false)
  }

  addTask(taskData: NewTask, user: User) {
    console.log(taskData);
    this.tasks = [{ ...taskData, id: Math.random(), userId: user.id, completed: false, createdAt: dayjs().utc().toDate() }, ...this.tasks];
  }

  completeTask(taskId: number) {
    this.tasks = this.tasks.map((task: Task) => {
      if (task.id === taskId) {
        return { ...task, completed: true, completeDate: dayjs().utc().toDate() };
      }
      return task;
    })
  }

}
