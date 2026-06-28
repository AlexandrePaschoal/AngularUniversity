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

  sortUniversities(order: string | number | undefined) {
    if (order === undefined) {
      return;
    }

    if (order === 'asc') {
      this.filteredUniversities.sort((a, b) => a.name.localeCompare(b.name));
    } else if (order === 'desc') {
      this.filteredUniversities.sort((a, b) => b.name.localeCompare(a.name));
    }
  }

  ngOnInit(): void {
    const navigation = history.state;

    this.universities = navigation.universities || [];

    this.filteredUniversities = [...this.universities];

    this.country = navigation.country || '';
  }
}
