import { Account } from 'models/Account';
import { createAccount } from 'models/transformers/createAccount';
import { createQuery } from 'utils/createQuery';

const url = 'https://kata.getmansa.com/accounts';

export const useAccountProfile = createQuery<Account[]>({
  url,
  transformer: (accounts) => accounts.map(createAccount),
});
