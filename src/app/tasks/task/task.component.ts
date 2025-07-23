import { Component, EventEmitter, Input, Output } from '@angular/core';

import { type TaskComponent } from './task.model';
@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class Task {
@Input ({required:true}) task!: TaskComponent; 
@Output() complete = new EventEmitter<string>();

onCompleteTask() {
  this.complete.emit(this.task.id)
}

}
