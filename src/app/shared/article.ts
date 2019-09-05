import { Comment } from './comment';

export class Article {
  id: string;
  title: string;
  imageUrl: string;
  categoryName: string;
  categoryId: string;
  categoryImageUrl: string;
  date: string;
  authorName: string;
  authorAvatar: string;
  authorPosition: string;
  postText: string;
  text: string;
  featured: boolean;
  comments: Comment[];
}
