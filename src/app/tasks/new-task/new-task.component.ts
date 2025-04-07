import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { type NewTask } from './new-task.types';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private tasksService = inject(TasksService);
  @Output() close = new EventEmitter<void>();
  @Input({ required: true }) userId!: string;

  title = signal<string>('');
  summary = signal<string>('');
  dueDate = signal<string>('');

  /**
   * The `onClose` function emits a close event.
   */
  onClose() {
    this.close.emit();
  }

  /**
   * The onSubmit function adds a new task with title, summary, and due date to the tasks service for a
   * specific user and then emits a close event.
   */
  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.title(),
        summary: this.summary(),
        dueDate: this.dueDate(),
      },
      this.userId
    );
    this.close.emit();
  }
}
