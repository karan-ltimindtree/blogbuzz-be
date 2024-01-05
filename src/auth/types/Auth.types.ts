export interface AuthRegister {
  name: string;
  email: string;
  password: string;
}

export interface AuthLogin {
  email: string;
  password: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
}
