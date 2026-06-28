import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  private storageKey = 'searchHistory';

  constructor() {}

  getHistory(): any[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  addSearch(country: string): void {
    const history = this.getHistory();

    history.unshift({
      country: country,
      date: new Date().toLocaleString(),
    });

    localStorage.setItem(this.storageKey, JSON.stringify(history));
  }

  clearHistory(): void {
    localStorage.removeItem(this.storageKey);
  }
}
