import { Account } from 'models/Account';
import { createAccount } from 'models/transformers/createAccount';
import { createQuery } from 'utils/createQuery';
import url from 'constants/urls';

export const useAccount = createQuery<Account[]>({
  url: url.ACCOUNTS,
  transformer: (accounts) => accounts.map(createAccount),
});
