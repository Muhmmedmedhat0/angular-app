import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

// The @Component decorator is a typescript feature
// that provides metadata
// that determines how the component should be processed,
// instantiated, and used at runtime.

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

// The class AppComponent is the application root component
// and is responsible for presenting the application view
export class AppComponent {
  title = 'angular-app';
}
