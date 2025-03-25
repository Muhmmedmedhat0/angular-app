import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

// Generate a random index to select a random user

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  // Get the image path for the selected user
  get imagePATH() {
    return `/assets/users/${this.avatar}`;
  }

  onSelctUser() {}
}
