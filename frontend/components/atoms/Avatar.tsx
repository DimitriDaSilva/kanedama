import styled from 'styled-components';

const Avatar = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  @media (max-width: 768px) {
    width: 3rem;
    height: 3rem;
  }
`;

export default Avatar;
