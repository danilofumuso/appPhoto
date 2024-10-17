import { Injectable } from '@angular/core';
import { iCard } from '../interfaces/icard';
import { map, Observable, ReplaySubject, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  apiUrl: string = 'https://jsonplaceholder.typicode.com/photos';

  favourites$ = new ReplaySubject<iCard>();

  constructor(private http: HttpClient) {}

  getPhotos(): Observable<iCard[]> {
    return this.http
      .get<iCard[]>(this.apiUrl)
      .pipe(map((res) => res.slice(0, 50)));
  }

  deletePhoto(id: number): Observable<iCard> {
    return this.http.delete<iCard>(`${this.apiUrl}/${id}`);
  }

  addToFavourites(card: iCard) {
    this.favourites$.next(card);
  }
}
