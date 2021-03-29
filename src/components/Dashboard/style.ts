import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
  height: calc(100vh - 5rem);
  
  @media (max-width: 900px) {
    padding-top: 8rem;
  }

`

export const ContainerCard = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }

`