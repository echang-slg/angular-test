import { dayjs } from '@util';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '@model';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../../shared/card/card.component";

@Component({
  selector: 'app-task',
  imports: [CommonModule, CardComponent],    //should be imported in the app.module
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<Task>();

  onCompleteTask() {
    //this.complete.emit(this.task);
    this.task.completed = true;
    this.task.completeDate = dayjs().utc().toDate()
    console.log(this.task);
  }
}
