import { Container, ContainerTemperature } from './styles';

interface CardProps {
  name: string
  temperature: number;
  humidity: number;
  pressure: number;
  lastUpdate: string;
}

export const Card = ({name, temperature, humidity, pressure, lastUpdate}: CardProps): JSX.Element => {
  return (
    <Container>
      <div>
        <header>
          <span>{name}</span>
        </header>
        <ContainerTemperature temperature={temperature}>
          {temperature}
        </ContainerTemperature>
      </div>
    </Container>
  )
}