import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();

  enteredTitle: any;
  enteredSummary: any;
  enteredDate: any;

  onCancel() {
    this.cancel.emit(); // emit a signal to trigger a function call
  }

}
