import styled from 'styled-components';

export const Container = styled.header`
  height: 4rem;
  margin: 0 auto;
  background: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  img {
    height: 25px;
  }

  @media (max-width: 900px) {
    position: fixed;
    width: 100%;
  }
`