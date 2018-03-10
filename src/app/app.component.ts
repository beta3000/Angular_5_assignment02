import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';

  isNotEmptyString() {
    return this.username.trim().length > 0;
  }

  userNameEmpty() {
    this.username = '';
  }
}
