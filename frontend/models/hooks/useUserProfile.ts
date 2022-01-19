import { createUser } from 'models/transformers/createUser';
import { User } from 'models/User';
import { createQuery } from 'utils/createQuery';

const url = 'https://randomuser.me/api/';

export const useUserProfile = createQuery<User>({
  url,
  transformer: createUser,
});
