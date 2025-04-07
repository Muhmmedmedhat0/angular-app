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
  @Output() submit = new EventEmitter<NewTask>();
  @Input({ required: true }) userId!: string;

  title: string = '';
  summary: string = '';
  dueDate: string = '';

  onClose() {
    this.close.emit();
  }
  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.title,
        summary: this.summary,
        dueDate: this.dueDate,
      },
      this.userId
    );
  }
}
