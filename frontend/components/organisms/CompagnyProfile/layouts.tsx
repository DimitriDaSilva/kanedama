import RectangleSkeleton from '@/components/atoms/RectangleSkeleton';
import styled from 'styled-components';

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 5.5rem;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const Skeleton = () => (
  <ContentContainer>
    <RectangleSkeleton height="1rem" width="12rem" />
    <RectangleSkeleton height="1rem" width="12rem" />
    <RectangleSkeleton height="1rem" width="12rem" />
  </ContentContainer>
);
