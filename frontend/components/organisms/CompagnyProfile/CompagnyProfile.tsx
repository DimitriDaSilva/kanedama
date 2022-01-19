import Typography from 'components/atoms/Typography';
import { useCompagnyProfile } from 'models/hooks/useCompagnyProfile';
import { ContentContainer } from './layouts';
import { Skeleton } from './layouts';

const CompagnyProfile = () => {
  const { data: compagny, isLoading } = useCompagnyProfile();

  if (isLoading) return <Skeleton />;

  const { name, SIRET, address } = compagny;

  return (
    <ContentContainer>
      <Typography>Name: {name}</Typography>
      <Typography>SIRET: {SIRET}</Typography>
      <Typography>
        address:&nbsp;<Typography uppercase>{address}</Typography>
      </Typography>
    </ContentContainer>
  );
};

export default CompagnyProfile;
