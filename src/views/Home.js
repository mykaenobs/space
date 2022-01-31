import styled from 'styled-components';
import bg from '../assets/home/background-home-desktop.jpg';
import tablet from '../assets/home/background-home-tablet.jpg';
import mobile from '../assets/home/background-home-mobile.jpg';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <Body>
      <Navbar />
      <Hero />
    </Body>
  );
}

export default Home;

const Body = styled.div`
  background-image: url(${bg});
  background-size: 100% 100%;
  height: 100vh;
  
  @media (max-width: 768px) {
    height: 100%;
    background-image: url(${tablet});
  }
  
  @media (max-width: 450px) {
    height: 100%;
    background-image: url(${mobile});
  }
`;