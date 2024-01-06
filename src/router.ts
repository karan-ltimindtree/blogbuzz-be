import { Router } from 'express';
import { authRouter } from './auth/auth.router';
import verifyToken from './middlewares/verifyToken.middleware';
import { postRouter } from './posts/post.router';
import { commentsRouter } from './comments/comments.router';

const router = Router();

router.use('/auth', authRouter);
router.use('/post', postRouter);
router.use('/comment', commentsRouter);

export default router;
