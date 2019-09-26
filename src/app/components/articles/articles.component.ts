import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { Article } from '../../shared/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticlesComponent implements OnInit {
  articles: Article[];
  loading: boolean;
  categories = [
    {id: 1, name: 'Angular'},
    {id: 2, name: 'React.js'},
    {id: 3, name: 'Vue.js'},
    {id: 4, name: 'Node.js'}
  ];

  constructor(public articlesService: ArticlesService,
              @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.loading = false;
    this.articlesService.getArticles()
      .subscribe((articles) => {
        this.loading = true;
        this.articles = articles;
      });
  }

  filterByCategory(categoryName) {
    this.loading = false;
    this.articlesService.getArticlesByCategory(categoryName).subscribe( articles => {
      this.loading = true;
      this.articles = articles;
    });
  }
}
