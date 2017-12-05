import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../services/task.service';

import { Task } from '../../models/task.model';
import { TaskStatus } from '../../models/enums/task-status.enum';
import { TaskTransition } from '../../models/enums/task-transition.enum';
import { TaskMoveEvent } from '../../models/events/task-move-event';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.css']
})
export class TasksPageComponent implements OnInit {

  rawTasks: Task[];
  tasksTodo: Task[];
  tasksDoing: Task[];
  tasksDone: Task[];

  constructor(private taskService: TaskService) {
    taskService.getTasks().subscribe((tasks) => {
      this.rawTasks = tasks;
      this.updateTaskLists();
    });
  }

  private updateTaskLists() {
    this.tasksTodo = this.rawTasks.filter((task) => {
      return (task.status === TaskStatus.Todo);
    });
    this.tasksDoing = this.rawTasks.filter((task) => {
      return (task.status === TaskStatus.Doing);
    });
    this.tasksDone = this.rawTasks.filter((task) => {
      return (task.status === TaskStatus.Done);
    });
  }

  ngOnInit() {
  }

  private changePriority(task: Task, direction: TaskTransition) {
    if (direction === TaskTransition.Up) {

    }
    else {

    }
  }

  handleTaskMove(moveEvent: TaskMoveEvent) {
    if (moveEvent.direction === TaskTransition.Back || moveEvent.direction === TaskTransition.Forward) {
      moveEvent.task.changeStatus(moveEvent.direction);
    }
    else {
      this.changePriority(moveEvent.task, moveEvent.direction);
    }
    this.updateTaskLists();
  }

  handleTaskDelete(task: Task) {
    console.log(task);
  }

}
