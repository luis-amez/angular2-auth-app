import { TaskStatus } from './enums/task-status.enum';
import { TaskTransition } from './enums/task-transition.enum';

export class Task {
  id: string;
  name: string;
  status: TaskStatus;
  priority: number;

  constructor(obj: Object = {}) {
    Object.assign(this, obj);
    this.status = this.status || TaskStatus.Todo;
  }
  changeStatus(direction: TaskTransition) {
    if (direction === TaskTransition.Back && this.status > 0) {
      this.status--;
    }
    else if (direction === TaskTransition.Forward && this.status < 2) {
      this.status++;
    }
  }
}
