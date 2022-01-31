import styled from 'styled-components';
import bg from '../assets/destination/background-destination-desktop.jpg';
import tablet from '../assets/destination/background-destination-tablet.jpg';
import mobile from '../assets/destination/background-destination-mobile.jpg';
import Navbar from '../components/Navbar';
import HeroDestination from '../components/HeroDestination';

const Destination = () => {
  return (
    <Body>
      <Navbar/>
      <HeroDestination/>
    </Body>
  )
}

export default Destination;

const Body = styled.div`
  background-image: url(${bg});
  overflow-x: hidden;
  background-size: 100% 100%;
  height: 100vh;
  position: relative;
  
  @media (max-width: 768px) {
    height: 100vh;
    background-image: url(${tablet});
  }

  @media (max-width: 450px) {
    height: 100vh;
    background-image: url(${mobile});
  }
`;