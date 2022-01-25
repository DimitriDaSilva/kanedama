import styled from 'styled-components';

const AvatarSkeleton = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.skeleton};
  @media (max-width: 768px) {
    width: 3rem;
    height: 3rem;
  }
`;

export default AvatarSkeleton;
