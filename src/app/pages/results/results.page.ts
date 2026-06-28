import { Component, OnInit } from '@angular/core';
import { University } from '../../models/university';
import { FavoritesService } from '../../services/favorites';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
  standalone: false,
})
export class ResultsPage implements OnInit {
  universities: University[] = [];
  filteredUniversities: University[] = [];
  country: string = '';
  searchTerm: string = '';

  constructor(private favoritesService: FavoritesService) {}

  addFavorite(university: University) {
    this.favoritesService.addFavorite(university);
  }

  filterUniversities() {
    if (!this.searchTerm) {
      this.filteredUniversities = [...this.universities];

      return;
    }

    this.filteredUniversities = this.universities.filter((university) =>
      university.name.toLowerCase().includes(this.searchTerm.toLowerCase()),
    );
  }

  ngOnInit(): void {
    const navigation = history.state;

    this.universities = navigation.universities || [];

    this.filteredUniversities = [...this.universities];

    this.country = navigation.country || '';
  }
}
