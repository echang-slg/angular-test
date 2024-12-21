import { TasksService } from './../tasks.service';
import { Component, EventEmitter, inject, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { User } from '@model';
import { dayjs } from '@util';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  private tasksService: TasksService = inject(TasksService);

  @Input({required: true}) user!: User
  @Output() close = new EventEmitter<void>();

  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDueDate?: Date;

  onAddTask() {
    // emit a signal to trigger a function call
    // pass the data to the function call
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: dayjs(this.enteredDueDate!).format()
    }, this.user);

    this.close.emit();
  }

  onCancel() {
    this.close.emit(); // emit a signal to trigger a function call
  }

}
