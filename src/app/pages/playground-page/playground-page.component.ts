import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user.model';
import { Task } from '../../models/task.model';
import { TaskStatus } from '../../models/enums/task-status.enum';
import { TaskTransition } from '../../models/enums/task-transition.enum';
import { TaskMoveEvent } from '../../models/events/task-move-event';

@Component({
  selector: 'app-playground-page',
  templateUrl: './playground-page.component.html',
  styleUrls: ['./playground-page.component.css']
})
export class PlaygroundPageComponent implements OnInit {
  someTask1: Task;
  someTask2: Task;
  someTask3: Task;
  someTasks: Task[];
  constructor() {
    this.someTask1 = new Task({
      name: 'example todo task',
      status: TaskStatus.Todo
    });
    this.someTask2 = new Task({
      name: 'example todo task',
      status: TaskStatus.Doing
    });
    this.someTask3 = new Task({
      name: 'example todo task',
      status: TaskStatus.Done
    });
    this.someTasks = [this.someTask1, this.someTask2, this.someTask3];
  }

  ngOnInit() {
  }

  handleTaskMove(direction: TaskTransition) {
    console.log('task transition!', direction);
  }

  handleTaskDelete() {
    console.log('task deleted!');
  }

  handleTaskColumnMove(event: TaskMoveEvent) {
    console.log('task transition in the list!', event);
  }

  handleTaskColumnDelete(task: Task) {
    console.log('task deletion in the list!', task);
  }


}
