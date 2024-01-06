import { User } from '../../auth/types/Auth.types';
import { Post } from '../../posts/types/Post.type';

export interface Comment {
  content: string;
  post_id: string;
  timestamp: Date;
  created_by: string;
  created_by_ref?: {
    name: true;
  };
  post_ref?: Post;
}
