import styled, { CSSProperties } from 'styled-components';
import colors from 'styles/colors';

const Typography = styled.div<{
  fontSize?: CSSProperties['fontSize'];
  color?: CSSProperties['color'];
  uppercase?: boolean;
  fontWeight?: CSSProperties['fontWeight'];
}>`
  display: flex;
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  color: ${({ color }) => color || colors.TEXT};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
`;

export default Typography;
