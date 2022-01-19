import styled from 'styled-components';
import colors from 'styles/colors';

const Typography = styled.div<{
  fontSize?: string;
  color?: string;
  uppercase?: boolean;
  fontWeight?: 'normal' | 'bold';
}>`
  display: flex;
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  color: ${({ color }) => color || colors.TEXT};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
`;

export default Typography;
