import styled, { CSSProperties } from 'styled-components';
import colors from 'styles/colors';

const TypographySkeleton = styled.div<{
  height?: CSSProperties['height'];
  width?: CSSProperties['width'];
}>`
  height: ${({ height }) => height || '3rem'};
  background-color: ${colors.SKELETON};
  width: ${({ width }) => width || '100%'};
  border-radius: 0.5rem;
`;

export default TypographySkeleton;
