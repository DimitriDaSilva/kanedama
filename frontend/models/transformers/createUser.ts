import { User } from 'models/User';
import { Transformer } from 'utils/types';

export const createUser: Transformer<User> = (user) => {
  const { name, picture } = user.results[0];
  return {
    firstname: name.first,
    lastname: name.last,
    photoURL: picture.medium,
  };
};
