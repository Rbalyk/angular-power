import { Component, Inject, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { Article } from '../../shared/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles: Article[];
  constructor(public articlesService: ArticlesService,
              @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.articlesService.getArticles()
      .subscribe(articles => this.articles = articles);
  }

}
