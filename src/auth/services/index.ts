import { getUserByEmail } from './getUserByEmail.service';
import { getUserById } from './getUserById.service';
import { getUserByRefreshToken } from './getUserByRefreshToken.service';
import { logout } from './logout.service';
import { register } from './register.service';
import { updateRefreshToken } from './updateRefreshToken.service';

const AuthService = { getUserByEmail, getUserById, getUserByRefreshToken, logout, register, updateRefreshToken };

export default AuthService;
