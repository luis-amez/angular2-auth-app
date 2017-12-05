import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';

import { Task } from '../../models/task.model';
import { TaskStatus } from '../../models/enums/task-status.enum';
import { TaskTransition } from '../../models/enums/task-transition.enum';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {
  @Input() task: Task;
  @Output() onMove = new EventEmitter<TaskTransition>();
  @Output() onDelete = new EventEmitter<void>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  canMoveBack() {
    return this.task.status !== TaskStatus.Todo;
  }

  handleUpClick() {
    this.onMove.emit(TaskTransition.Up);
  }

  handleDownClick() {
    this.onMove.emit(TaskTransition.Down);
  }

  handleBackClick() {
    this.onMove.emit(TaskTransition.Back);
  }

  handleForwardClick() {
    this.onMove.emit(TaskTransition.Forward);
  }

  handleDeleteClick() {
    this.onDelete.emit();
  }

}
