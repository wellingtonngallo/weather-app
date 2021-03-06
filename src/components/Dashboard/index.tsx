import { useEffect, useState } from 'react';
import api from '../../api/api';
import { Card } from '../Card';
import { Container, ContainerCard } from './style';

import load from '../../assets/images/loader.svg';

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
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const timer = setInterval(
      () => getData(),
      600000
    );

    return () => clearInterval(timer);
  });

  const getData = () => {
    setLoading(true);
    api.get(`group?id=3445709,3421319,184745&APPID=fc84f380815d9c6c55b1c9fa5512de39&units=metric`)
    .then(result => {
      const newArray = result.data.list.map((weather: CityRequest) => {
        return {
          name: weather.name,
          temp_max: weather.main.temp_max,
          humidity: weather.main.humidity,
          pressure: weather.main.pressure,
          updatedAt: `${new Date().getHours()}:${new Date().getMinutes()}`
        }
      });

      setLoading(false);
      setCityWeather(newArray);
    });
  }

  return (
    <Container>
      <ContainerCard>
        {loading ? (
          <img src={load} alt=""/>
        ): 
          cityWeather.map(item => (
            <Card
              key={item.name}
              name={item.name}
              temperature={item.temp_max}
              humidity={item.humidity}
              pressure={item.pressure}
              lastUpdate={item.updatedAt}
            />
          ))
        }
      </ContainerCard>
    </Container>
  )
}