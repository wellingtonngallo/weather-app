import { useEffect, useState } from 'react';
import api from '../../api/api';
import { Card } from '../Card';
import { Container, ContainerCard } from './style';

interface CityWeather {
  name: string;
  temp_max: number;
  humidity: number;
  pressure: number;
  updatedAt: string;
}

interface CityRequest {
  main: CityWeather;
  name: string;
}

export const Dashboard = (): JSX.Element => {
  const [cityWeather, setCityWeather] = useState<CityWeather[]>([]);

  useEffect(() => {
    api.get(`group?id=3445709,3421319,184745&APPID=fc84f380815d9c6c55b1c9fa5512de39&units=metric`)
      .then(result => {
        const newArray = result.data.list.map((weather: CityRequest) => {
          return {
            name: weather.name,
            temp_max: weather.main.temp_max,
            humidity: weather.main.humidity,
            pressure: weather.main.pressure,
            updatedAt: new Date()
          }
        });

        setCityWeather(newArray);
      })
  }, []);
  
  return (
    <Container>
      <ContainerCard>
        {cityWeather.map(item => (
          <Card
            name={item.name}
            temperature={item.temp_max}
            humidity={item.humidity}
            pressure={item.pressure}
            lastUpdate={item.updatedAt}
          />
        ))}
      </ContainerCard>
    </Container>
  )
}