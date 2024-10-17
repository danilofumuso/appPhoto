import { iCard } from './../../interfaces/icard';
import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  photos: iCard[] = [];
  favourites: iCard[] = [];

  constructor(private cardSvc: CardService) {}

  ngOnInit(): void {
    this.cardSvc.getPhotos().subscribe((photos) => {
      this.photos = photos;
    });

    this.cardSvc.favourites$.subscribe((card) => {
      if (!this.favourites.some((c) => c.id === card.id)) {
        this.favourites.push(card);
      }
    });
  }
}
