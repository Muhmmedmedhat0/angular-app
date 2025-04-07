import { Injectable } from '@angular/core';
import { type NewTask } from './new-task/new-task.types';
import { type Task } from './task/task.types';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks: Task[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Learn Angular',
      summary: 'Learn all the basics of Angular',
      dueDate: '2025-10-01',
    },
    {
      id: 't2',
      userId: 'u1',
      title: 'Learn React',
      summary: 'Learn all the basics of React',
      dueDate: '2025-10-01',
    },
    {
      id: 't3',
      userId: 'u2',
      title: 'Learn Vue',
      summary: 'Learn all the basics of Vue',
      dueDate: '2025-10-01',
    },
    {
      id: 't4',
      userId: 'u2',
      title: 'Learn Svelte',
      summary: 'Learn all the basics of Svelte',
      dueDate: '2025-10-01',
    },
    {
      id: 't5',
      userId: 'u3',
      title: 'Learn Angular',
      summary: 'Learn all the basics of Angular',
      dueDate: '2025-10-01',
    },
    {
      id: 't6',
      userId: 'u3',
      title: 'Learn React',
      summary: 'Learn all the basics of React',
      dueDate: '2025-10-01',
    },
    {
      id: 't7',
      userId: 'u4',
      title: 'Learn Vue',
      summary: 'Learn all the basics of Vue',
      dueDate: '2025-10-01',
    },
    {
      id: 't8',
      userId: 'u4',
      title: 'Learn Svelte',
      summary: 'Learn all the basics of Svelte',
      dueDate: '2025-10-01',
    },
    {
      id: 't9',
      userId: 'u5',
      title: 'Learn Angular',
      summary: 'Learn all the basics of Angular',
      dueDate: '2025-10-01',
    },
    {
      id: 't10',
      userId: 'u5',
      title: 'Learn React',
      summary: 'Learn all the basics of React',
      dueDate: '2025-10-01',
    },
    {
      id: 't11',
      userId: 'u6',
      title: 'Learn Vue',
      summary: 'Learn all the basics of Vue',
      dueDate: '2025-10-01',
    },
    {
      id: 't12',
      userId: 'u6',
      title: 'Learn Svelte',
      summary: 'Learn all the basics of Svelte',
      dueDate: '2025-10-01',
    },
  ];

  // Method to get all tasks for a specific user
  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }
  // Method to add a new task
  addTask(task: NewTask, userId: string) {
    this.tasks.unshift({
      id: Math.random().toString(),
      userId: userId,
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate,
    });
  }

  // Method to delete a task by ID
  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
