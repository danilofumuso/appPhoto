import { Component, Input } from '@angular/core';
import { iCard } from '../../interfaces/icard';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() card!: iCard;

  constructor(private cardSvc: CardService) {}

  addToFavs(card: iCard) {
    this.cardSvc.addToFavourites(card);
  }

  delete(id: number) {
    this.cardSvc.deletePhoto(id).subscribe();
  }
}
