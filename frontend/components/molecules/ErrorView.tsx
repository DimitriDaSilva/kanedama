import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.surface};
`;

export const ErrorView = (
  props: React.ButtonHTMLAttributes<HTMLDivElement>,
) => <Container {...props}>Damn, things are brokens 😵</Container>;
