import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Article } from '../../../../core/models/article.model';
import { IconComponent } from '../../../../shared/ui/components/icon/icon.component';

@Component({
  imports: [DatePipe, IconComponent],
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
})
export class ArticleCardComponent {
  readonly article = input.required<Article>();
}
