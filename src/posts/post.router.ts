import { Router } from 'express';
import PostValidator from './validators';
import Middleware from '../middlewares';
import PostController from './controllers';
import verifyToken from '../middlewares/verifyToken.middleware';

export const postRouter = Router();
postRouter.use(verifyToken);
// create single post
postRouter.post('/', PostValidator.createPostValidator, Middleware.controllerHandler(PostController.createPost));

// get all posts
postRouter.get('/', Middleware.controllerHandler(PostController.getAllPosts));

// get recent posts
postRouter.get('/recent', Middleware.controllerHandler(PostController.getRecentPosts));

// get my posts
postRouter.get('/myPosts', Middleware.controllerHandler(PostController.getMyPosts));

// get single post
postRouter.get(
  '/:id',
  PostValidator.getSinglePostValidator,
  Middleware.controllerHandler(PostController.getSinglePost),
);
