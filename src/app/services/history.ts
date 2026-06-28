import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  private storageKey = 'searchHistory';

  constructor() {}

  getHistory(): string[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  addSearch(country: string): void {
    const history = this.getHistory();

    if (!history.includes(country)) {
      history.unshift(country);

      localStorage.setItem(this.storageKey, JSON.stringify(history));
    }
  }

  clearHistory(): void {
    localStorage.removeItem(this.storageKey);
  }
}
