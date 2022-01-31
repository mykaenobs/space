import styled from 'styled-components';
import bg from '../assets/crew/background-crew-desktop.jpg';
import tablet from '../assets/crew/background-crew-tablet.jpg';
import mobile from '../assets/crew/background-crew-mobile.jpg';
import Navbar from '../components/Navbar';
import HeroCrew from '../components/HeroCrew';

const Crew = () => {
  return (
    <Body>
      <Navbar/>
      <HeroCrew/>
    </Body>
  )
}

export default Crew;

const Body = styled.div`
  background-image: url(${bg});
  overflow-x: hidden;
  background-size: 100% 100%;
  height: 100vh;

  @media (max-width: 768px) {
    height: 100vh;
    background-image: url(${tablet});
  }

  @media (max-width: 450px) {
    height: 100vh;
    background-image: url(${mobile});
  }
`;