import { Component, signal } from '@angular/core';
import { Article } from '../../core/models/article.model';
import { ArticleCardComponent } from './components/article-card/article-card.component';

@Component({
  imports: [ArticleCardComponent],
  selector: 'app-article-feed',
  templateUrl: './article-feed.component.html',
})
export class ArticleFeedComponent {
  readonly articles = signal<Article[]>([
    {
      id: '1',
      title: 'Comprendre le Feature-Sliced Design',
      excerpt:
        "Une plongée en profondeur dans l'architecture front-end la plus populaire du moment pour les projets Angular scalables.",
      author: { id: 'u1', name: 'Alice Dupont' },
      publishedAt: new Date().toISOString(),
      category: 'I.T.',
      likesCount: 42,
      commentsCount: 12,
      coverImageUrl:
        'http://localhost:9000/deevice-bucket/6ac5298549e07e1845b794b1/lukrate-tux-1531289_1920-1791306192227.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=root_deevice_key%2F20261027%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20261027T133744Z&X-Amz-Expires=3600&X-Amz-Signature=402b2b3eef3a9ef698c2e52fa6a3dcaf9e4d4db4b35509ee7fd7b7dfc189d984&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject',
    },
    {
      id: '2',
      title: 'Les Signals vs RxJS',
      excerpt:
        "Faut-il tout remplacer par des Signals ? Analyse des cas d'usage parfaits pour chaque technologie.",
      author: { id: 'u2', name: 'Bob Martin' },
      publishedAt: new Date(Date.now() - 86400000).toISOString(), // Hier
      category: 'Web Dev',
      likesCount: 128,
      commentsCount: 34,
    },
  ]);
}
