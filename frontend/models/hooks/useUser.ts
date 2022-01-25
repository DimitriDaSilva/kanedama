import url from 'constants/urls';
import { createUser } from 'models/transformers/createUser';
import { User } from 'models/User';
import { createQuery } from 'utils/createQuery';

export const useUser = createQuery<User>({
  url: url.USER,
  transformer: createUser,
});
