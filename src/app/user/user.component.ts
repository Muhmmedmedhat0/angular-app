import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

// Randomly select a user from the list of dummy users
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  slectedUser = DUMMY_USERS[randomIndex];

  // Get the image path for the selected user
  get imagePATH() {
    return `/assets/users/${this.slectedUser.avatar}`;
  }
}
