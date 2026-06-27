import { Component } from '@angular/core';
import { UniversityService } from '../services/university';
import { University } from '../models/university';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  country: string = '';
  universities: University[] = [];
  loading = false;

  constructor(private universityService: UniversityService) {}

  searchUniversities() {
    if (!this.country.trim()) {
      return;
    }

    this.loading = true;

    this.universityService.getUniversities(this.country).subscribe({
      next: (data) => {
        this.universities = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      },
    });
  }
}
