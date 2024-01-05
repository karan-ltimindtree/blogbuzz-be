import { Router } from 'express';
import AuthValidator from './validators';
import Middleware from '../middlewares';
import AuthController from './controllers';
import verifyToken from '../middlewares/verifyToken.middleware';

export const authRouter = Router();

authRouter.post('/register', AuthValidator.registerValidator, Middleware.controllerHandler(AuthController.register));

authRouter.post('/login', AuthValidator.loginValidator, Middleware.controllerHandler(AuthController.login));

authRouter.get('/refresh', Middleware.controllerHandler(AuthController.refreshToken));

authRouter.get('/getUserDetails', verifyToken, Middleware.controllerHandler(AuthController.getUserDetails));

authRouter.get('/logout', Middleware.controllerHandler(AuthController.logout));
