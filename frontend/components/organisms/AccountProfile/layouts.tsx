import Grid from '@/components/atoms/Grid';
import RectangleSkeleton from '@/components/atoms/RectangleSkeleton';
import styled from 'styled-components';

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Skeleton = () => (
  <ContentContainer>
    <Grid>
      {[1, 2, 3, 4].map((key) => (
        <RectangleSkeleton key={key} width="22rem" height="6.5rem" />
      ))}
    </Grid>
  </ContentContainer>
);
