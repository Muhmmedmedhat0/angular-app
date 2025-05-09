import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  constructor(private tasksService: TasksService) {}

  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  isAddingTask: boolean = false;

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onAddTask() {
    this.isAddingTask = true;
  }

  onCloseTask() {
    this.isAddingTask = false;
  }
}
