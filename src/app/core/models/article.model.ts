export type Article = {
  id: string;
  title: string;
  excerpt: string;
  coverImageUrl?: string;
  author: UserSnippet;
  publishedAt: string;
  category: string;
  likesCount: number;
  commentsCount: number;
};

export interface UserSnippet {
  id: string;
  name: string;
  avatarUrl?: string;
}
