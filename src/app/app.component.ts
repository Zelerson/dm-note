import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardContainerComponent } from './components/card-container/card-container.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
