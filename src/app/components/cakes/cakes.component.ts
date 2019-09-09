import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { FormControl } from '@angular/forms';
import { EMPTY, Subscription } from 'rxjs';
import { catchError, distinctUntilChanged, switchMap, filter, debounceTime, tap } from 'rxjs/operators';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.scss']
})
export class CakesComponent implements OnInit, OnDestroy {
  searchField: FormControl;
  loading = false;
  searchResult: any[];
  private subscription: Subscription;
  constructor(public searchService: SearchService) { }

  ngOnInit() {
    this.searchField = new FormControl();
    this.subscription = this.searchField.valueChanges.pipe(
      tap(_ => (this.loading = true)),
      debounceTime(1200),
      distinctUntilChanged(),
      tap(() => {
        this.searchResult = [];
        this.loading = false;
      }),
      filter(text => text.trim()),
      switchMap(text => this.searchService.search(text).pipe(
        catchError(err => EMPTY)
      )),
      tap(_ => (this.loading = false)),
    ).subscribe((data) => {
      this.searchResult = data['results'];
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
