import CardSkeleton from '@/components/atoms/CardSkeleton';
import Grid from '@/components/atoms/Grid';
import styled from 'styled-components';

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Skeleton = () => (
  <ContentContainer>
    <Grid>
      {[1, 2, 3, 4].map((key) => (
        <CardSkeleton key={key} />
      ))}
    </Grid>
  </ContentContainer>
);
