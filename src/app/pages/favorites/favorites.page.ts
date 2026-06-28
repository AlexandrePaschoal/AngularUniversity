import { Component, OnInit } from '@angular/core';
import { University } from '../../models/university';
import { FavoritesService } from '../../services/favorites';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  standalone: false,
})
export class FavoritesPage implements OnInit {
  favorites: University[] = [];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit() {
    this.loadFavorites();
  }

  ionViewWillEnter() {
    this.loadFavorites();
  }

  loadFavorites() {
    this.favorites = this.favoritesService.getFavorites();
  }

  removeFavorite(name: string) {
    this.favoritesService.removeFavorite(name);

    this.loadFavorites();
  }
}
