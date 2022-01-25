import AvatarSkeleton from '@/components/atoms/AvatarSkeleton';
import RectangleSkeleton from '@/components/atoms/RectangleSkeleton';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const NameContainer = styled.div`
  display: flex;
  @media (min-width: 768px) {
    gap: ${({ theme }) => theme.spacing.xs};
    align-items: center;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Skeleton = () => (
  <Container>
    <AvatarSkeleton />
    <RectangleSkeleton height="2rem" width="12rem" />
  </Container>
);
