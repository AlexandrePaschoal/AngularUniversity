import { Component, OnInit } from '@angular/core';
import { University } from '../../models/university';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
  standalone: false,
})
export class ResultsPage implements OnInit {
  universities: University[] = [];
  country: string = '';

  constructor() {}

  ngOnInit(): void {
    const navigation = history.state;

    this.universities = navigation.universities || [];

    this.country = navigation.country || '';
  }
}
