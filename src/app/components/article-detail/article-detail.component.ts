import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ArticlesService } from '../../services/articles.service';
import { Article } from '../../shared/article';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  article: Article;
  constructor(private articlesService: ArticlesService,
              private location: Location,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.articlesService.getArticle(id)
      .then(article => this.article = article);
  }

  goBack(): void {
    this.location.back();
  }
}
