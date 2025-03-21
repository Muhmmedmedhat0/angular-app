import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

// Generate a random index to select a random user
const randomIndex = () => Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // state for the selected user that have impact on the view
  slectedUser = DUMMY_USERS[randomIndex()];

  // Get the image path for the selected user
  get imagePATH() {
    return `/assets/users/${this.slectedUser.avatar}`;
  }

  // Select a random user
  onSelctUser() {
    this.slectedUser = DUMMY_USERS[randomIndex()];
  }
}
