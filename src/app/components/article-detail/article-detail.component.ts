import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {ArticlesService} from '../../services/articles.service';
import {Article} from '../../shared/article';
import {switchMap} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Comment} from '../../shared/comment';
import { visibility } from '../../animations/app.animation';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
  animations: [
    visibility()
  ]
})
export class ArticleDetailComponent implements OnInit {
  article: Article;
  articleId: string[];
  prev: string;
  next: string;
  comment: Comment;
  comments: Comment[];
  commentForm: FormGroup;
  date: string;
  autoTicks = false;
  max = 5;
  min = 0;
  showTicks = true;
  step = 1;
  thumbLabel = true;
  value = 5;
  tickIntervalNumber = 1;
  articleCopy: Article;
  visibility = 'shown';

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this.tickIntervalNumber) : 0;
  }

  formErrors = {
    author: '',
    comment: ''
  };
  validationMessages = {
    author: {
      required: 'Author Name is required.',
      minlength: 'Author Name must be at least 2 characters long.',
      maxlength: 'Author cannot be more than 25 characters long.'
    },
    comment: {
      required: 'Comment is required.',
      minlength: 'Comment must be at least 2 characters long.',
      maxlength: 'Comment cannot be more than 500 characters long.'
    }
  };

  constructor(private articlesService: ArticlesService,
              private location: Location,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              @Inject('BaseURL') private BaseURL) {
    this.createForm();
  }


  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.articlesService.getArticleId().subscribe(articleIds => this.articleId = articleIds);
    this.route.params.pipe(switchMap((params: Params) => {
      this.visibility = 'hidden';
      return this.articlesService.getArticle(+params['id']);
    }))
      .subscribe(article => {
        this.article = article;
        this.articleCopy = article;
        this.setPrevNext(article.id);
        this.visibility = 'shown';
        this.comments = article.comments;
      });
  }

  createForm() {
    this.commentForm = this.fb.group({
      rating: 1,
      comment: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(500)]],
      author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      date: '',
    });
    this.commentForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
    this.date = new Date().toDateString();
    this.commentForm.get('date').setValue(this.date);
  }

  setPrevNext(articleId: string) {
    const index = this.articleId.indexOf(articleId);
    this.prev = this.articleId[(this.articleId.length + index - 1) % this.articleId.length];
    this.next = this.articleId[(this.articleId.length + index + 1) % this.articleId.length];
  }

  onSubmit() {
    this.comment = (this.commentForm.value);
    this.commentForm.get('date').setValue(this.date);
    this.articleCopy.comments.unshift(this.comment);
    this.articlesService.putArticleComment(this.articleCopy)
      .subscribe(article => {
        this.article = article;
        this.articleCopy = article;
      });
    this.commentForm.reset();

    alert('Дякую за Ваш коментар!!!');
  }

  onValueChanged(data?: any) {
    if (!this.commentForm) {
      return;
    }
    const form = this.commentForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  goBack(): void {
    this.location.back();
  }
}
