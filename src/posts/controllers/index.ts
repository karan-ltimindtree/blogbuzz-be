import { createPost } from './createPost.controller';
import { getAllPosts } from './getAllPosts.controller';
import { getMyPosts } from './getMyPosts.controller';
import { getRecentPosts } from './getRecentPosts.controller';
import { getSinglePost } from './getSinglePost.controller';

const PostController = { createPost, getAllPosts, getMyPosts, getRecentPosts, getSinglePost };
export default PostController;
