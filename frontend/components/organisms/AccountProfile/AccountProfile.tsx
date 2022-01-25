import Grid from '@/components/atoms/Grid';
import AccountCard from '@/components/molecules/AccountCard';
import { ErrorView } from '@/components/molecules/ErrorView';
import { useAccountProfile } from 'models/hooks/useAccounts';
import { ContentContainer } from './layouts';
import { Skeleton } from './layouts';

const AccountProfile = () => {
  const { data: accounts, isLoading, isError } = useAccountProfile();

  if (isLoading) return <Skeleton />;

  if (isError) return <ErrorView data-cy="error-view-accounts" />;

  return (
    <ContentContainer>
      <Grid>
        {accounts.map(({ accountNumber, balance, currency }) => (
          <AccountCard
            key={accountNumber}
            accountNumber={accountNumber}
            balance={balance}
            currency={currency}
          />
        ))}
      </Grid>
    </ContentContainer>
  );
};

export default AccountProfile;
