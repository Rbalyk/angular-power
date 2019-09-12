import {Routes} from '@angular/router';
import {HomeComponent} from '../components/home/home.component';
import {ArticlesComponent} from '../components/articles/articles.component';
import {NewsComponent} from '../components/news/news.component';
import {CakesComponent} from '../components/cakes/cakes.component';
import {ArticleDetailComponent} from '../components/article-detail/article-detail.component';
import { SkillTestComponent } from '../components/skill-test/skill-test.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'articles', component: ArticlesComponent},
  { path: 'articledetail/:id', component: ArticleDetailComponent },
  {path: 'news', component: NewsComponent},
  {path: 'cakes', component: CakesComponent},
  {path: 'skill-test', component: SkillTestComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];
