import Avatar from 'components/atoms/Avatar';
import Typography from 'components/atoms/Typography';
import { Container, NameContainer, Skeleton } from './layouts';
import { useUser } from 'models/hooks/useUser';
import { ErrorView } from '@/components/molecules/ErrorView';

const UserProfile = () => {
  const {
    data: user,
    isLoading,
    isError,
  } = useUser({
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    refreshWhenOffline: false,
    refreshWhenHidden: false,
    refreshInterval: 0,
  });

  if (isLoading) return <Skeleton />;

  if (isError) return <ErrorView data-cy="error-view-user" />;

  const { firstname, lastname, photoURL } = user;

  return (
    <Container>
      <Avatar src={photoURL} alt="avatar" data-cy="avatar" />
      <NameContainer>
        <Typography fontSize="2rem" uppercase data-cy="firstname">
          {firstname}
        </Typography>
        <Typography fontSize="2rem" data-cy="lastname">
          {lastname}
        </Typography>
      </NameContainer>
    </Container>
  );
};

export default UserProfile;
