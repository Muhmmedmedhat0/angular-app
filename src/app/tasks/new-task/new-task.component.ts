import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { type NewTask } from './new-task.types';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<NewTask>();

  title = signal<string>('');
  summary = signal<string>('');
  dueDate = signal<string>('');

  onClose() {
    this.close.emit();
  }
  onSubmit() {
    this.submit.emit({
      title: this.title(),
      summary: this.summary(),
      dueDate: this.dueDate(),
    });
    this.title.set('');
    this.summary.set('');
    this.dueDate.set('');
  }
}
