import { Container, ContainerTemperature, ContainerContent } from './styles';

interface CardProps {
  name: string
  temperature: number;
  humidity: number;
  pressure: number;
  lastUpdate: string;
}

export const Card = ({name, temperature, humidity, pressure, lastUpdate}: CardProps): JSX.Element => {
  console.log(lastUpdate)
  return (
    <Container>
      <ContainerContent>
        <header>
          <span>{name}</span>
        </header>
        <ContainerTemperature temperature={temperature}>
          {temperature}
        </ContainerTemperature>
        <div className="card-info">
          <div>
            <span>HUMIDITY</span>
            <p>{humidity}%</p>
          </div>
          <div>
            <span>PRESSURE</span>
            <p>{pressure}hPa</p>
          </div>
        </div>
        <div className="card-time">
        <p>Updated at {lastUpdate}</p>
        </div>
      </ContainerContent>
    </Container>
  )
}