import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTreeModule } from '@angular/cdk/tree';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SearchService } from './services/search.service';
import { baseURL } from './shared/baseurl';
import 'hammerjs';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { NewsComponent } from './components/news/news.component';
import { CakesComponent } from './components/cakes/cakes.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { HomeComponent } from './components/home/home.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { SkillTestComponent } from './components/skill-test/skill-test.component';
import { ErrorInterceptor } from './interseptors/error.interceptor';
import { JwtInterceptor } from './interseptors/jwt.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthenticationComponent,
    LoginComponent,
    RegisterComponent,
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
  providers: [
    SearchService,
    {provide: 'BaseURL', useValue: baseURL},
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  entryComponents: [
    AuthenticationComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
