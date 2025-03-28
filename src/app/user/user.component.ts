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

  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  @Output() selected = new EventEmitter<string>();

  // avatar = input.required<string>();
  // name = input.required<string>();
  image = computed(() => {
    return `/assets/users/${this.avatar}`;
  });

  onSelctUser() {
    this.selected.emit(this.id);
  }
}
