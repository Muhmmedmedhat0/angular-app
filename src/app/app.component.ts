import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';

// The @Component decorator is a typescript feature
// that provides metadata
// that determines how the component should be processed,
// instantiated, and used at runtime.

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

// The class AppComponent is the application root component
// and is responsible for presenting the application view
export class AppComponent {
  users = DUMMY_USERS;
}
