import { Account } from 'models/Account';

export const createAccount = ({
  current,
  currency,
  account_number,
}: any): Account => ({
  currency,
  balance: current,
  accountNumber: account_number,
});
