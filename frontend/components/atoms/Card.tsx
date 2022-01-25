import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }) => '0 ' + theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px ${({ theme }) => theme.colors.accent}66 solid;
  background-color: ${({ theme }) => theme.colors.accent}0D;
  width: 100%;
  max-width: 22rem;
  height: 6.5rem;
  gap: ${({ theme }) => theme.spacing.sm};
  transition: box-shadow 0.2s ease-in-out;
  :hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
  cursor: pointer;
`;

export default Card;
