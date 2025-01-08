import { Component } from '@angular/core';
import { CardContainerComponent } from './components/card-container/card-container.component';


@Component({
  selector: 'app-root',
  imports: [CardContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
