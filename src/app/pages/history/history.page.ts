import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../../services/history';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
  standalone: false,
})
export class HistoryPage implements OnInit {
  history: any[] = [];

  constructor(private historyService: HistoryService) {}

  ngOnInit() {
    this.loadHistory();
  }

  ionViewWillEnter() {
    this.loadHistory();
  }

  loadHistory() {
    this.history = this.historyService.getHistory();
  }

  clearHistory() {
    this.historyService.clearHistory();
    this.loadHistory();
  }
}
