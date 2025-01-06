import { Component, inject } from '@angular/core';
import { CardState } from '../state/card.state';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-container',
  imports: [CardComponent, CommonModule],
  templateUrl: './card-container.component.html',
  styleUrl: './card-container.component.scss'
})
export class CardContainerComponent {
    cardState: CardState = inject(CardState);

    addNewCard() {
      this.cardState.addCard();
    }
}
