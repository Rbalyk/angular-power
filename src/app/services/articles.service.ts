import { Injectable } from '@angular/core';
import { Article } from '../shared/article';
import {Observable, of, Subject} from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  getArticlesByCategory(categoryName: string): Observable<Article[]> {
    return this.http.get<Article[]>(baseURL + 'articles/?categoryName=' + categoryName);
  }
  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(baseURL + 'articles').pipe(delay(1000));
  }

  getArticle(id: number): Observable<Article> {
    return this.http.get<Article>(baseURL + 'articles/' + id).pipe(delay(2000));
  }

  getArticleId(): Observable<string[] | any> {
    return this.getArticles().pipe(
      map(dishes => dishes.map(dish => dish.id)),
    );
  }



  putArticleComment(article: Article): Observable<Article> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put<Article>(baseURL + 'articles/' + article.id, article, httpOptions);
  }
}
