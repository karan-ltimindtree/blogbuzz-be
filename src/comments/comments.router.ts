import { Router } from 'express';
import CommentValidator from './validators';
import Middleware from '../middlewares';
import CommentController from './controllers';
import verifyToken from '../middlewares/verifyToken.middleware';

export const commentsRouter = Router();
commentsRouter.use(verifyToken);

// create comment
commentsRouter.post(
  '/',
  CommentValidator.createCommentValidator,
  Middleware.controllerHandler(CommentController.createComment),
);

// get comments by post
commentsRouter.get(
  '/:post_id',
  CommentValidator.getCommentsByPostValidator,
  Middleware.controllerHandler(CommentController.getCommentsByPost),
);
