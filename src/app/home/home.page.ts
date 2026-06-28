import { Component } from '@angular/core';
import { UniversityService } from '../services/university';
import { University } from '../models/university';
import { Router } from '@angular/router';
import { HistoryService } from '../services/history';

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

  constructor(
    private universityService: UniversityService,
    private historyService: HistoryService,
    private router: Router,
  ) {}

  searchUniversities() {
    if (!this.country.trim()) {
      return;
    }

    this.loading = true;

    this.universityService.getUniversities(this.country).subscribe({
      next: (data: University[]) => {
        this.loading = false;

        this.historyService.addSearch(this.country, data.length);

        this.router.navigate(['/results'], {
          state: {
            universities: data,
            country: this.country,
          },
        });
      },

      error: (err: any) => {
        console.error(err);
        this.loading = false;
      },
    });
  }
}
