import { Component, inject, input } from '@angular/core';
import { CdkDragEnd, CdkDragStart, DragDropModule } from '@angular/cdk/drag-drop';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroTrash, heroChevronDown, heroPencilSquare } from '@ng-icons/heroicons/outline';
import { FormsModule } from '@angular/forms'
import { CardModel } from '../../models/card.model';
import { CardState } from '../state/card.state';

@Component({
  selector: 'app-card',
  imports: [DragDropModule, NgIconComponent, FormsModule],
  providers:[provideIcons({heroTrash, heroChevronDown, heroPencilSquare})],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  private cardState: CardState = inject(CardState);
  card = input<CardModel>();
  
  editTitle: string = '';
  editContent: string = '';

  ngOnInit() {
    if (this.card) {
      this.editTitle = this.card()!.title;
      this.editContent = this.card()!.content;
    }
  }

  onDragEnd(event: CdkDragEnd) {
    const { x, y } = event.source.getFreeDragPosition();
    this.cardState.updateCardPostion(this.card()!.id, x, y);
  }

  onDragStart() {
    this.cardState.bringToFront(this.card()!.id);
  }

  removeCard() {
    this.cardState.removeCard(this.card()!.id);
  }

  toggleCardVisibility() {
    this.cardState.toggleCardVisibility(this.card()!.id);
  }

  toggleEdit() {
    this.cardState.toggleCardEdit(this.card()!.id);
  }

  saveEdits() {
    this.cardState.updateCardContent(this.card()!.id, this.editTitle, this.editContent);
    this.toggleEdit();
  }

}
