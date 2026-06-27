import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { University } from '../models/university';

@Injectable({
  providedIn: 'root',
})
export class UniversityService {
  private apiUrl = 'http://universities.hipolabs.com/search?country=';

  constructor(private http: HttpClient) {}

  getUniversities(country: string): Observable<University[]> {
    return this.http.get<University[]>(`${this.apiUrl}${country}`);
  }
}
