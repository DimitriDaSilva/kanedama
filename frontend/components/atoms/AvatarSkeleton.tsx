import styled from 'styled-components';
import colors from 'styles/colors';

const AvatarSkeleton = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: ${colors.SKELETON};
  @media (max-width: 768px) {
    width: 3rem;
    height: 3rem;
  }
`;

export default AvatarSkeleton;
