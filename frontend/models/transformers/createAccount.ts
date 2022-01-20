import { Account } from 'models/Account';
import { Transformer } from 'utils/types';

export const createAccount: Transformer<Account> = ({
  current,
  currency,
  account_number,
}) => ({
  currency,
  balance: current,
  accountNumber: account_number,
});
