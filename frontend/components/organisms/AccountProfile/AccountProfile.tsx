import Grid from '@/components/atoms/Grid';
import AccountCard from '@/components/molecules/AccountCard';
import { useAccountProfile } from 'models/hooks/useAccountProfile';
import { ContentContainer } from './layouts';
import { Skeleton } from './layouts';

const AccountProfile = () => {
  const { data: accounts, isLoading } = useAccountProfile();

  if (isLoading) return <Skeleton />;

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
