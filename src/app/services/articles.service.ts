import { Injectable } from '@angular/core';
import { Article } from "../shared/article";
import { ARTICLES } from "../shared/articles";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor() { }

  getArticles(): Promise<Article[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(ARTICLES), 1200);
    });
  }
  getArticle(id: string): Promise<Article> {
    return new Promise(resolve => {
      setTimeout(() => resolve(ARTICLES.filter((article) =>(article.id === id))[0]), 1200);
    });
  }
}
