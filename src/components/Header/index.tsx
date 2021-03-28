import { Container } from './styles';
import logo from '../../assets/images/logo.svg';

export const Header = (): JSX.Element => {
  return (
    <Container>
      <div>
        <img src={logo} alt="Logo"/>
      </div>
    </Container>
  )
}