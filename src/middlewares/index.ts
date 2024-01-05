import { controllerHandler } from './controllerHandler.middleware';
import { credentials } from './credentials.middleware';
import { isAuthorizationHeaderPresent } from './isAuthorizationHeaderPresent.middleware';
import { isBodyPresent } from './isBodyPresent.middleware';
import verifyToken from './verifyToken.middleware';

const Middleware = { controllerHandler, credentials, isAuthorizationHeaderPresent, isBodyPresent, verifyToken };
export default Middleware;
