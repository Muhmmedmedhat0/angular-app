import {
  Component,
  computed,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { type User } from './user.types';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // The @Input decorator is a typescript feature
  // that provides metadata

  @Input({ required: true }) user!: User;
  @Input() selectedUser!: boolean;
  @Output() selected = new EventEmitter<string>();

  image = computed(() => {
    return `/assets/users/${this.user.avatar}`;
  });

  onSelctUser() {
    this.selected.emit(this.user.id);
  }
}
