import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Task } from '../../models/task.model';
import { TaskTransition } from '../../models/enums/task-transition.enum';
import { TaskMoveEvent } from '../../models/events/task-move-event';

@Component({
  selector: 'app-task-column',
  templateUrl: './task-column.component.html',
  styleUrls: ['./task-column.component.css']
})
export class TaskColumnComponent implements OnInit {
  @Input() tasks: Task[];
  @Output() onTaskMove = new EventEmitter<TaskMoveEvent>();
  @Output() onTaskDelete = new EventEmitter<Task>();

  constructor() { }

  ngOnInit() {
  }

  handleTaskMove(direction: TaskTransition, task: Task) {
    const event = new TaskMoveEvent();
    event.task = task;
    event.direction = direction;
    this.onTaskMove.emit(event);
  }

  handleTaskDelete(task: Task) {
    this.onTaskDelete.emit(task);
  }

}
