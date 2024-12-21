import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NewTask } from '@model';
import { dayjs } from '@util';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTask>();

  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDueDate?: Date;

  onAddTask() {
    // emit a signal to trigger a function call
    // pass the data to the function call
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: dayjs(this.enteredDueDate!).format()
    });
  }

  onCancel() {
    this.cancel.emit(); // emit a signal to trigger a function call
  }

}
