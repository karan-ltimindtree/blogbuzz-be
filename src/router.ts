import { Router } from 'express';
import { authRouter } from './auth/auth.router';
import verifyToken from './middlewares/verifyToken.middleware';
import { postRouter } from './posts/post.router';

const router = Router();

router.use('/auth', authRouter);
router.use('/post', postRouter);

export default router;
