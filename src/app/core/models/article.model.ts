import { User } from './user.model';

export type Article = {
  id: string;
  title: string;
  description: string;
  postImageUrl?: string;
  author: Author;
  category: Category;
  publishedAt: string;
};

type Author = Omit<User, 'email'>;

type Category = {
  id: string;
  title: string;
};
