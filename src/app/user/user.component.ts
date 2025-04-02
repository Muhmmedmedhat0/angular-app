import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // The @Input decorator is a typescript feature
  // that provides metadata

  @Input({ required: true }) user!: {
    id: string;
    avatar: string;
    name: string;
  };

  @Output() selected = new EventEmitter<string>();

  image = computed(() => {
    return `/assets/users/${this.user.avatar}`;
  });

  onSelctUser() {
    this.selected.emit(this.user.id);
  }
}
