import { ErrorView } from '@/components/molecules/ErrorView';
import Typography from 'components/atoms/Typography';
import { useCompagnyProfile } from 'models/hooks/useCompany';
import { ContentContainer } from './layouts';
import { Skeleton } from './layouts';

const CompagnyProfile = () => {
  const { data: company, isLoading, isError } = useCompagnyProfile();

  if (isLoading) return <Skeleton />;

  if (isError) return <ErrorView data-cy="error-view-company" />;

  const { name, SIRET, address } = company;

  return (
    <ContentContainer>
      <Typography data-cy="company-name">Name: {name}</Typography>
      <Typography data-cy="siret">SIRET: {SIRET}</Typography>
      <Typography data-cy="address">
        address:&nbsp;<Typography uppercase>{address}</Typography>
      </Typography>
    </ContentContainer>
  );
};

export default CompagnyProfile;
