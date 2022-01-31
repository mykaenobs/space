import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import technologies from '../data.json';
import { useEffect, useState } from 'react';
import { importTechnology } from '../libs/dynamicImport';


const HeroTechnology = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 768px)'})
  const [tab, setTab] = useState(0);
  const [image, setImage] = useState('')
  const { technology } = technologies;
  const tech = technology[tab];


  useEffect(() => {
    isTablet ?
      importTechnology(tech.name.toLowerCase().split(' ').join('-') + '-landscape', setImage):
      importTechnology(tech.name.toLowerCase().split(' ').join('-') + '-portrait', setImage);
  }, [tab, isTablet, tech.name]);

  const tabs = (e) => setTab(e.target.dataset.tab);

  return (
    <Container>
      <InnerContainer>
        <h2><span>03</span> SPACE LAUNCH 101</h2>
        <Flex>
          <Tabs>
            {technologies.technology.map((planet, index) => (
              <Tab key={index} data-tab={index} onClick={tabs}>{++index}</Tab>
            ))}
          </Tabs>
          <Details>
            <span>THE TERMINOLOGY…</span>
            <h3>{tech.name}</h3>
            <p>{tech.description}</p>
          </Details>
          <Image>
            <img src={image} alt=""/>
          </Image>
        </Flex>
      </InnerContainer>
    </Container>
  );
}

export default HeroTechnology;

const Container = styled.div`
  padding-left: 2em;
  
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const InnerContainer = styled.div`
  width: min(1193px, 100%);
  margin-left: auto;
  
  h2 {
    font-family: var(--font-condensed);
    text-transform: uppercase;
    color: var(--white);
    font-weight: 200;
    letter-spacing: 5px;

    span {
      color: var(--white);
      opacity: .25;
    }
  }
  
  @media (max-width: 768px) {
    h2 {
      padding: 0 2rem;
    }
  }
  
`;

const Flex = styled.div`
  display: flex;
  column-gap: 3em;
  align-items: center;
  height: 65vh;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Tabs = styled.div`
  display: grid;
  gap: 1em;
  font-family: var(--font-bellefair);
  font-size: 18px;
  
  @media (max-width: 768px) {
    margin-top: 3em;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Tab = styled.div`
  width: 50px;
  aspect-ratio: 1 / 1;
  border: 1px solid var(--white);
  border-radius: 50%;
  display: inherit;
  place-items: center;
  
  background-color: ${({ active }) => active ? 'var(--white)': 'none'};
  color: ${({ active }) => active ? 'black' :'var(--white)'};
  
  :hover {
    background-color: var(--white);
    color: black;
  }
`;

const Details = styled.div`
  flex: 1;
  color: var(--white);
  span {
    font-family: var(--font-condensed);
    color: #D0D6F9;
    font-weight: 200;
    letter-spacing: 3px;
  }
  h3 {
    font-family: var(--font-bellefair);
    font-size: 56px;
    margin: 0;
    text-transform: uppercase;
  }
  p {
    font-family: var(--font-barlow);
    font-weight: 200;
    line-height: 25px;
  }
  
  @media (max-width: 768px) {
    margin-top: 2em;
    padding: 0 2em;
    text-align: center;
    
    h3 {
      font-size: clamp(1.2rem, 8vw, 56px);
    }
  }
`;

const Image = styled.div`
  margin-top: 2em;
  img {
    
  }
  
  @media (max-width: 768px) {
    order: -1;
  }
`;