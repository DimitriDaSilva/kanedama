import { useTheme } from 'styled-components';
import Card from '../atoms/Card';
import CardItem from '../atoms/CardItem';
import Typography from '../atoms/Typography';

export interface AccountCardProps {
  accountNumber: number;
  balance: number;
  currency: string;
}

const AccountCard = ({
  accountNumber,
  balance,
  currency,
}: AccountCardProps) => {
  const { colors } = useTheme();
  return (
    <Card data-cy="account-card">
      <CardItem>
        <Typography color={colors.accent} fontWeight="bold">
          Account Number:
        </Typography>
        <Typography color={colors.accent} fontWeight="bold">
          {accountNumber}
        </Typography>
      </CardItem>
      <CardItem>
        <Typography color={colors.accent}>Balance:</Typography>
        <Typography color={colors.accent}>
          {balance}
          {currency}
        </Typography>
      </CardItem>
    </Card>
  );
};

export default AccountCard;
