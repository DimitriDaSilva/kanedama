import TypographySkeleton from '@/components/atoms/TypographySkeleton';
import styled from 'styled-components';

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 5.5rem;
  gap: 1rem;
`;

export const Skeleton = () => (
  <ContentContainer>
    <TypographySkeleton height="1rem" width="12rem" />
    <TypographySkeleton height="1rem" width="12rem" />
    <TypographySkeleton height="1rem" width="12rem" />
  </ContentContainer>
);
