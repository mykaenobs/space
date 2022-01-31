import styled from 'styled-components';
import bg from '../assets/technology/background-technology-desktop.jpg';
import tablet from '../assets/technology/background-technology-tablet.jpg';
import mobile from '../assets/technology/background-technology-mobile.jpg';
import Navbar from '../components/Navbar';
import HeroTechnology from '../components/HeroTechnology';

const Technology = () => {
  return (
    <Body>
      <Navbar/>
      <HeroTechnology/>
    </Body>
  )
}

export default Technology;

const Body = styled.div`
  background-image: url(${bg});
  background-size: 100% 100%;
  height: 100vh;
  overflow-x: hidden;
  
  @media (max-width: 768px) {
    height: 100vh;
    background-image: url(${tablet});
  }

  @media (max-width: 450px) {
    height: 100vh;
    background-image: url(${mobile});
  }
`;