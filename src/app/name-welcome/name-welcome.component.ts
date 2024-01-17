import { Component } from '@angular/core';

@Component({
  selector: 'app-name-welcome',
  template: '<label>Name: </label> {{firstName}} {{lastName}}',
  styleUrls: ['./name-welcome.component.css']
})
export class NameWelcomeComponent {
  firstName: string = "Bob";
  lastName: string = "Marley";
}
