import {Component, Inject, Input, OnInit} from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { Article } from '../../shared/article';
import {log} from "util";

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
    // this.articlesService.getArticlesByCategory(this.onCategoryName).subscribe( data => {
    //   console.log(data);
    // });
  }


}
