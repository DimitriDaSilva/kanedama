import styled from 'styled-components';

const MainContainer = styled.main`
  padding: 3rem 5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  & > * {
    margin-bottom: 3rem;
  }
  @media (max-width: 768px) {
    padding: 3rem 2rem;
  }
`;

export default MainContainer;
