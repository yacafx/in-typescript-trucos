import { Component } from '@angular/core';
import { Author } from '@trucos/models';
import { greet } from '@trucos/utils';

@Component({
  selector: 'trucos-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-angular-app';

  greeting = greet('yacaFx');
  autor: Author;
}
