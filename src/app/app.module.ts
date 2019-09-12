import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTreeModule } from '@angular/cdk/tree';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material.module';
import { HttpClientModule} from '@angular/common/http';
import { SearchService } from './services/search.service';
import 'hammerjs';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/login/sign-in/sign-in.component';
import { SignUpComponent } from './components/login/sign-up/sign-up.component';
import { NewsComponent } from './components/news/news.component';
import { CakesComponent } from './components/cakes/cakes.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { HomeComponent } from './components/home/home.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { SkillTestComponent } from './components/skill-test/skill-test.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    LoginComponent,
    SignInComponent,
    SignUpComponent,
    NewsComponent,
    CakesComponent,
    ArticlesComponent,
    HomeComponent,
    ArticleDetailComponent,
    SkillTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CdkTreeModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [SearchService],
  entryComponents: [
    ContactComponent,
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
