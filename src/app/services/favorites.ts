import { Injectable } from '@angular/core';
import { University } from '../models/university';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private storageKey = 'favorites';

  constructor() {}

  getFavorites(): University[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  addFavorite(university: University): void {
    const favorites = this.getFavorites();

    const exists = favorites.some((f) => f.name === university.name);

    if (!exists) {
      favorites.push(university);

      localStorage.setItem(this.storageKey, JSON.stringify(favorites));
    }
  }

  removeFavorite(name: string): void {
    const favorites = this.getFavorites().filter((f) => f.name !== name);

    localStorage.setItem(this.storageKey, JSON.stringify(favorites));
  }
}
