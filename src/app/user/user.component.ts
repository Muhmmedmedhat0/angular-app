import {
  Component,
  computed,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

interface User {
  id: string;
  avatar: string;
  name: string;
}

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

  @Output() selected = new EventEmitter<string>();

  image = computed(() => {
    return `/assets/users/${this.user.avatar}`;
  });

  onSelctUser() {
    this.selected.emit(this.user.id);
  }
}
