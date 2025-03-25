import { Component, computed, Input, input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // The @Input decorator is a typescript feature
  // that provides metadata

  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  // // The input signal decorator is a typescript feature
  // // that provides metadata

  // avatar = input.required<string>();
  // name = input.required<string>();
  image = computed(() => {
    return `/assets/users/${this.avatar}`;
  });

  onSelctUser() {
    console.log(`${this.name} selected`);
  }
}
