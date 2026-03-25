import { User } from '../models/user';

export function generateUser(overrides: Partial<User> = {}): User {
  const timestamp = Date.now();

  const defaultUser: User = {
    name: `User_${timestamp}`,
    email: `user_${timestamp}@test.com`,
    password: 'Test123*'
  };

  return {
    ...defaultUser,
    ...overrides
  };
}