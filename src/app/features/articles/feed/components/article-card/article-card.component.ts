import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Article } from '../../../../../core/articles/models/article.model';

@Component({
  imports: [DatePipe],
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
})
export class ArticleCardComponent {
  readonly article = input.required<Article>();
  protected readonly placeholderDate = new Date();
}
