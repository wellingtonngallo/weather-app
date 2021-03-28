import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border-radius: 0.25rem;
  background: var(--white);
  height: 220px;
  width: 250px;
  box-shadow: 0 0 2px var(--gray-200);
  margin-left: 4rem;

  div {
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
  display: flex;
  justify-content: center;
  align-items: center;
  font-size:  4rem;
  margin-top: 2rem;
  color: ${({ temperature }) => handleColorType(temperature)};
`