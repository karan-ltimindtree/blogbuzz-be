import { createPost } from './createPost.service';
import { getAllPosts } from './getAllPosts.service';
import { getMyPosts } from './getMyPosts.service';
import { getRecentPosts } from './getRecentPosts.service';
import { getSinglePost } from './getSinglePost.service';

const PostService = { createPost, getAllPosts, getMyPosts, getRecentPosts, getSinglePost };
export default PostService;
