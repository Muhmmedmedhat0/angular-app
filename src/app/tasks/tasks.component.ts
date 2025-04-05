import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Learn Angular',
      summary: 'Learn all the basics of Angular',
      dueDate: new Date('2025-10-01'),
    },
    {
      id: 't2',
      userId: 'u1',
      title: 'Learn React',
      summary: 'Learn all the basics of React',
      dueDate: new Date('2025-10-01'),
    },
    {
      id: 't3',
      userId: 'u2',
      title: 'Learn Vue',
      summary: 'Learn all the basics of Vue',
      dueDate: new Date('2025-10-01'),
    },
    {
      id: 't4',
      userId: 'u2',
      title: 'Learn Svelte',
      summary: 'Learn all the basics of Svelte',
      dueDate: new Date('2025-10-01'),
    },
    {
      id: 't5',
      userId: 'u3',
      title: 'Learn Angular',
      summary: 'Learn all the basics of Angular',
      dueDate: new Date('2025-10-01'),
    },
    {
      id: 't6',
      userId: 'u3',
      title: 'Learn React',
      summary: 'Learn all the basics of React',
      dueDate: new Date('2025-10-01'),
    },
    {
      id: 't7',
      userId: 'u4',
      title: 'Learn Vue',
      summary: 'Learn all the basics of Vue',
      dueDate: new Date('2025-10-01'),
    },
    {
      id: 't8',
      userId: 'u4',
      title: 'Learn Svelte',
      summary: 'Learn all the basics of Svelte',
      dueDate: new Date('2025-10-01'),
    },
    {
      id: 't9',
      userId: 'u5',
      title: 'Learn Angular',
      summary: 'Learn all the basics of Angular',
      dueDate: new Date('2025-10-01'),
    },
    {
      id: 't10',
      userId: 'u5',
      title: 'Learn React',
      summary: 'Learn all the basics of React',
      dueDate: new Date('2025-10-01'),
    },
    {
      id: 't11',
      userId: 'u6',
      title: 'Learn Vue',
      summary: 'Learn all the basics of Vue',
      dueDate: new Date('2025-10-01'),
    },
    {
      id: 't12',
      userId: 'u6',
      title: 'Learn Svelte',
      summary: 'Learn all the basics of Svelte',
      dueDate: new Date('2025-10-01'),
    },
  ];
  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    console.log(`Task ${taskId} completed`);
  }
}
