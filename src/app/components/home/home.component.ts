import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ArticlesService} from '../../services/articles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories = [
    { id: 1, name: 'Angular'},
    { id: 2, name: 'React.js'},
    { id: 3, name: 'Vue.js'},
    { id: 4, name: 'Node.js'}
  ];

  constructor(private articlesService: ArticlesService) {
  }

  ngOnInit() {
  }

  filterByCategory(categoryName) {
    this.articlesService.categoryName = categoryName;
  }


}
