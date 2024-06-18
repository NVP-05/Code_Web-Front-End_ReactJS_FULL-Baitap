export interface User {
  id: number;
  userName: string;
  email: string;
  password: string;
  repassword: string;
  cart: Cart[];
}

interface Cart {}
