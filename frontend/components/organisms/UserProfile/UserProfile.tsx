import Avatar from 'components/atoms/Avatar';
import Typography from 'components/atoms/Typography';
import { Container, NameContainer, Skeleton } from './layouts';
import { useUserProfile } from 'models/hooks/useUserProfile';

const UserProfile = () => {
  const { data: user, isLoading } = useUserProfile({
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    refreshWhenHidden: false,
    refreshInterval: 0,
  });

  if (isLoading) return <Skeleton />;

  const { firstname, lastname, photoURL } = user;

  return (
    <Container>
      <Avatar src={photoURL} />
      <NameContainer>
        <Typography fontSize="2rem" uppercase>
          {firstname}
        </Typography>
        <Typography fontSize="2rem">{lastname}</Typography>
      </NameContainer>
    </Container>
  );
};

export default UserProfile;
