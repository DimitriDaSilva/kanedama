import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => '0 ' + theme.spacing.xl};
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.24);
  position: fixed;
  width: 100%;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export default Header;
