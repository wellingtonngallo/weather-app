import styled from 'styled-components';

export const ContainerContent = styled.div`
  width: 100%;

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid var(--background);
    height: 3rem;

    span {
      color: var(--gray-400);
    }
  }

  .card-time {
    background: #F8F8F8;
    padding: 0.5rem;

    p {
      color: var(--gray-300);
      font-size: 12px;
      text-align: center;
    }
  }

  .card-info {
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    text-align: center;
    width: 100%;
    background: #F8F8F8;

    div {
      span {
        font-size: 14px;
        color: var(--gray-300);
      }

      p {
        color: var(--gray-400);

      }
    }
  }
`
export const Container = styled.div`
  display: flex;
  border-radius: 0.25rem;
  background: var(--white);
  height: 300px;
  width: 250px;
  box-shadow: 0 0 2px var(--gray-200);
  margin-left: 4rem;

  @media (max-width: 900px) {
    & + div {
      margin-top: 4rem;
    }
  }
`

interface DivProps {
  temperature: number;
}

const handleColorType = (number: number) => {
  if (number <= 5) {
    return '#69A3FF';
  }

  if (number > 5 && number <= 25) {
    return '#FF9632';
  }

  if (number > 25) {
    return '#ED1946';
  }
};

export const ContainerTemperature = styled.div<DivProps>`
  height: calc(100% - 9rem);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size:  4rem;
  color: ${({ temperature }) => handleColorType(temperature)};
`