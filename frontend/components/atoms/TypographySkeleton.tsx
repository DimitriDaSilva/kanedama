import styled from 'styled-components';
import colors from 'styles/colors';

const TypographySkeleton = styled.div<{ height?: string; width?: string }>`
  height: ${({ height }) => height || '3rem'};
  background-color: ${colors.SKELETON};
  width: ${({ width }) => width || '100%'};
  border-radius: 0.5rem;
`;

export default TypographySkeleton;
