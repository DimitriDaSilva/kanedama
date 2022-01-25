import styled, { CSSProperties } from 'styled-components';

const RectangleSkeleton = styled.div<{
  height?: CSSProperties['height'];
  width?: CSSProperties['width'];
}>`
  height: ${({ height }) => height || '3rem'};
  background-color: ${({ theme }) => theme.colors.skeleton};
  width: ${({ width }) => width || '100%'};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;

export default RectangleSkeleton;
