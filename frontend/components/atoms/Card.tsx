import styled from 'styled-components';
import colors from 'styles/colors';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1.5rem;
  border-radius: 0.25rem;
  border: 1px ${colors.ACCENT}66 solid;
  background-color: ${colors.ACCENT}0D;
  width: 100%;
  max-width: 22rem;
  height: 6.5rem;
  gap: 1rem;
`;

export default Card;
