import { getUserDetails } from './getUserDetails.controller';
import { login } from './login.controller';
import { logout } from './logout.controller';
import { refreshToken } from './refreshToken.controller';
import { register } from './register.controller';

const AuthController = { getUserDetails, login, logout, refreshToken, register };

export default AuthController;
