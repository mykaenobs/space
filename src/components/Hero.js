import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Hero = () => {
  return (
    <Container>
      <Flex>
        <Content>
          <span>SO, YOU WANT TO TRAVEL TO</span>
          <h1>SPACE</h1>
          <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </Content>
        <CTA>
          <Explore to={'/destination'}>Explore</Explore>
        </CTA>
      </Flex>
    </Container>
  );
}

export default Hero;

const Container = styled.div`
  padding: var(--padding);
  
  @media (max-width: 768px) {
    padding-top: 5em;
    padding-bottom: 3em;
  }
`;

const Flex = styled.div`
  width: min(1024px, 100%);
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
  > div {
    flex: 1;
  }
  
  height: 70vh;
  
  @media (max-width: 768px) {
    flex-direction: column;
    height: 100vh;
    align-items: center;
    row-gap: 6em;
  }
`;

const Content = styled.div`
  color: var(--white);
  span {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 28px;
    letter-spacing: 5px;
  }
  
  h1 {
    font-size: 150px;
    font-family: 'Bellefair', sans-serif;
    line-height: 0;
  }
  
  p {
    width: min(444px, 100%);
    line-height: 24px;
    font-size: 18px;
    font-weight: 200;
    font-family: 'Barlow', sans-serif;
  }
  
  @media (max-width: 768px) {
    text-align: center;
    
    span {
      font-size: clamp(.8rem, 40vw, 1.6rem);
    }
    
    h1 {
      font-size: clamp(1rem, 40vw, 8rem);
    }
    
    p {
      margin: -30px auto 0 auto;
      font-size: clamp(.8rem, 40vw, 1.1rem);
    }
  }
  @media (max-width: 375px) {
    span {
      font-size: clamp(.8rem, 30vw, 1.2rem);
    }

    h1 {
      font-size: clamp(1rem, 30vw, 8rem);
    }

    p {
      margin-top: -20px;
      font-size: clamp(.8rem, 30vw, 1rem);
    }
  }
`;

const CTA = styled.div`
  display: inherit;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const Explore = styled(Link)`
  font-family: var(--font-bellefair);
  color: black;
  text-decoration: none;
  font-size: 32px;
  background-color: var(--white);
  height: 250px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  display: grid;
  place-items: center;
  text-transform: uppercase;
  
  :hover {
    box-shadow: 0 0 0 50px var(--hover);
  }
  
  @media (max-width: 768px) {
    height: 200px;

    :hover {
      box-shadow: 0 0 0 30px var(--hover);
    }
  }
`;