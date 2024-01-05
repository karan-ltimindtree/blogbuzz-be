import { db } from '../../config/db.server';
import { AuthRegister } from '../types/Auth.types';

export function register(payload: AuthRegister) {
  return db.user.create({
    data: {
      name: payload.name,
      email: payload.email,
      password: payload.password,
    },
  });
}
