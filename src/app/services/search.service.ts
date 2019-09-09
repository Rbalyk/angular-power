import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchItem } from '../shared/searchItem';

@Injectable({providedIn: 'root'})


export class SearchService {
  baseUrl = 'https://api.cdnjs.com/libraries';
   queryUrl = '?search=';

  constructor(private http: HttpClient) { }

  search(text: string): Observable<SearchItem[]> {
    return this.http.get<SearchItem[]>(this.baseUrl + this.queryUrl + text);
  }
}
