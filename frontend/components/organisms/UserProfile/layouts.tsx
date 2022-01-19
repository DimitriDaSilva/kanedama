import AvatarSkeleton from '@/components/atoms/AvatarSkeleton';
import TypographySkeleton from '@/components/atoms/TypographySkeleton';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const NameContainer = styled.div`
  display: flex;
  @media (min-width: 768px) {
    gap: 0.5rem;
    align-items: center;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Skeleton = () => (
  <Container>
    <AvatarSkeleton />
    <TypographySkeleton height="2rem" width="12rem" />
  </Container>
);
