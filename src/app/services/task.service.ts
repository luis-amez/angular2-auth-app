import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';
import { Task } from '../models/task.model';
import { TaskStatus } from '../models/enums/task-status.enum';

const apiUrl = environment.apiUrl + '/task';

@Injectable()
export class TaskService {

  tasks: Task[] = [];

  constructor(private http: Http) {}

  private getNextPriority() : number {
    const lowestPriority = this.tasks.reduce((priority, current) => {
      return current.priority > priority ? current.priority : priority;
    }, 0);
    return lowestPriority + 1;
  }

  private getRandomTaskId(): string {
    return Math.random() + '';
  }

  getTasks() {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(apiUrl, options)
      .map((res: Response) => {
        let data = res.json();
        return data.map((obj) => new Task(obj));
      });
  }

  addTask(taskName: string): Task {
    const task = new Task({
      id: this.getRandomTaskId(),
      name: taskName,
      priority: this.getNextPriority(),
    });
    this.tasks.push(task);
    return task;
  }

  updateTask(task: Task) {
    // @todo store in the server
  }

  deleteTask(task: Task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
    // @todo store in the server
  }


}
