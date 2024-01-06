import { createComment } from './createComment.service';
import { getCommentsByPost } from './getCommentsByPost.service';

const CommentsService = { createComment, getCommentsByPost };
export default CommentsService;
