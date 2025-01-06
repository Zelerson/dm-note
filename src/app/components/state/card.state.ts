import { computed, Injectable, signal } from "@angular/core";
import { CardModel } from "../../models/card.model";

@Injectable({
    providedIn: 'root'
})
export class CardState {
    private cards = signal<CardModel[]>([]);

    readonly cards$ = computed(() => this.cards());

    addCard() {
        const newCard: CardModel = {
            id: Date.now(),
            title: 'New',
            content: 'Note Content',
            x: 0,
            y: 0,
            isVisible: true,
            isEdit: false,
        };
        this.cards.set([...this.cards(), newCard]);
    }

    removeCard(id: number) {
        this.cards.set(this.cards().filter(card => card.id !== id));
    }

    toggleCardVisibility(id: number) {
        this.cards.set(
            this.cards().map(card =>
                card.id === id ? {...card, isVisible: !card.isVisible} : card
            )
        );
    }

    toggleCardEdit(id: number) {
        this.cards.set(
            this.cards().map(card =>
                card.id === id ? {...card, isEdit: !card.isEdit} : card
            )
        );
    }

    updateCardPostion(id: number, x: number, y: number) {
        this.cards.set(
            this.cards().map(card => 
                card.id === id ? {...card, x, y} : card
            )
        );
    }

    updateCardContent(id: number, title: string, content: string) {
        this.cards.set(
            this.cards().map(card =>
                card.id === id? {...card, title, content} : card
            )
        );
    }

    bringToFront(id: number) {
        const cards = this.cards();
        const index = cards.findIndex((card) => card.id === id);
      
        if (index === -1) return;
      
        const [card] = cards.splice(index, 1);
        this.cards.set([...cards, card]);
      }


}