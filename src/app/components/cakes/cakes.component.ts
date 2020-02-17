import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import { SearchService } from '../../services/search.service';
import { FormControl } from '@angular/forms';
import { EMPTY, Subscription } from 'rxjs';
import { catchError, distinctUntilChanged, switchMap, filter, debounceTime, tap } from 'rxjs/operators';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CakesComponent implements OnInit, OnDestroy {

  searchCake: FormControl;
  loading = false;
  isSearchCakeResult = false;
  searchCakeResult: any[];

  private subscription: Subscription;
  constructor(public searchService: SearchService) { }

  ngOnInit() {
    this.searchCake = new FormControl();
    this.subscription = this.searchCake.valueChanges.pipe(
      tap(_ => (this.loading = true)),
      debounceTime(1200),
      distinctUntilChanged(),
      tap(() => {
        this.searchCakeResult = [];
        this.loading = false;
        this.isSearchCakeResult = false;
      }),
      filter(text => text.trim()),
      switchMap(text => this.searchService.search(text).pipe(
        catchError(err => EMPTY)
      )),
      tap(() => {
        this.isSearchCakeResult = true;
      }),
      tap(_ => (this.loading = false)),
    ).subscribe((data) => {
      this.searchCakeResult = data['results'];
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
