import { Account } from 'models/Account';
import { createAccount } from 'models/transformers/createAccount';
import { createQuery } from 'utils/createQuery';
import url from 'constants/urls';

export const useAccountProfile = createQuery<Account[]>({
  url: url.ACCOUNTS,
  transformer: (accounts) => accounts.map(createAccount),
});
