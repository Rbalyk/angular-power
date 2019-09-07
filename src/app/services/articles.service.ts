import { Injectable } from '@angular/core';
import { Article } from '../shared/article';
import { ARTICLES } from '../shared/articles';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor() { }

  getArticles(): Observable<Article[]> {
    return of(ARTICLES).pipe(delay(1200));
  }
  getArticle(id: string): Observable<Article> {
    return of(ARTICLES.filter((article) => (article.id === id))[0]).pipe(delay(1000));
  }

  getArticleId(): Observable<string[] | any> {
    return of(ARTICLES.map(dish => dish.id));
  }

}
