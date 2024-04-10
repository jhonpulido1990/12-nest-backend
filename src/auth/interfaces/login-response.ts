import { User } from '../entities/user.entity';

export interface LoginResponse {
  token: string;
  user: User;
}
