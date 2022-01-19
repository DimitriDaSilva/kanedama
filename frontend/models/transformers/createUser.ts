import { User } from 'models/User';

export const createUser = (user: any): User => {
  const { name, picture } = user.results[0];
  return {
    firstname: name.first,
    lastname: name.last,
    photoURL: picture.medium,
  };
};
