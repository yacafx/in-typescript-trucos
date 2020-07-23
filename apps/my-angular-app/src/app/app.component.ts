import { Component } from '@angular/core';
import { greet } from '@trucos/utils';

@Component({
  selector: 'trucos-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-angular-app';

  greeting = greet('yacafx');
}
