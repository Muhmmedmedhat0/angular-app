import { Component, computed, signal } from '@angular/core';
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
  // Selected user signal with initial value from the DUMMY_USERS array
  // The signal is updated with a new random user when the 'onSelctUser' method is called
  slectedUser = signal(DUMMY_USERS[randomIndex()]);
  imagePATH = computed(() => `/assets/users/${this.slectedUser().avatar}`);
  // // Get the image path for the selected user
  // get imagePATH() {
  //   return `/assets/users/${this.slectedUser().avatar}`;
  // }

  // Select a random user
  onSelctUser() {
    this.slectedUser.set(DUMMY_USERS[randomIndex()]);
  }
}
