import styled, { CSSProperties } from 'styled-components';

const Typography = styled.div<{
  fontSize?: CSSProperties['fontSize'];
  color?: CSSProperties['color'];
  uppercase?: boolean;
  fontWeight?: CSSProperties['fontWeight'];
}>`
  display: flex;
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  color: ${({ color, theme }) => color || theme.colors.text};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
`;

export default Typography;
