import colors from 'styles/colors';
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
}: AccountCardProps) => (
  <Card>
    <CardItem>
      <Typography color={colors.ACCENT} fontWeight="bold">
        Account Number:
      </Typography>
      <Typography color={colors.ACCENT} fontWeight="bold">
        {accountNumber}
      </Typography>
    </CardItem>
    <CardItem>
      <Typography color={colors.ACCENT}>Balance:</Typography>
      <Typography color={colors.ACCENT}>
        {balance}
        {currency}
      </Typography>
    </CardItem>
  </Card>
);

export default AccountCard;
