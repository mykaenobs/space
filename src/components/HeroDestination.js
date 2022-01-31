import styled from 'styled-components';
import plants from '../data.json';
import { useEffect, useState } from 'react';
import { importDestination } from '../libs/dynamicImport';

const HeroDestination = () => {
  const [tab, setTab] = useState(0);
  const [image, setImage] = useState('')
  const { destinations } = plants;
  const destination = destinations[tab];

  useEffect(() => {
    importDestination(destination.name.toLowerCase(), setImage);
  }, [tab]);

  const tabs = (e) => setTab(e.target.dataset.tab);

  return (
    <Container>
      <InnerContainer>
        <h2><span>01</span> Pick your destination</h2>
        <Flex>
          <Planet>
            <img src={image} alt=""/>
          </Planet>
          <Details>
            <Tabs>
              {plants.destinations.map((planet, index) => (
                <Tab key={index} data-tab={index} onClick={tabs}>{planet.name}</Tab>
              ))}
            </Tabs>
            <Detail>
              <h1>{destination.name}</h1>
              <p>{destination.description}</p>
              <hr/>
              <div className={'flex'}>
                <div>
                  <small>AVG. DISTANCE</small>
                  <p>{destination.distance}</p>
                </div>
                <div>
                  <small>Est. travel time</small>
                  <p>{destination.travel}</p>
                </div>
              </div>
            </Detail>
          </Details>
        </Flex>
      </InnerContainer>
    </Container>
  );
}

export default HeroDestination;

const Container = styled.div`
  padding: var(--padding);
`;

const InnerContainer = styled.div`
  width: min(1024px, 100%);
  margin: 0 auto;
  
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
  
`;

const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  > div {
    flex: 1;
  }
  height: 70vh;
  row-gap: 3em;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Planet = styled.div`
  img {
    width: min(400px, 100%);
  }
  
  @media (max-width: 768px) {
    margin-top: 3em;
    img {
      width: 100%;
    }
  }
`;

const Details = styled.div`
  color: var(--white);
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Tabs = styled.div`
  display: flex;
  column-gap: 1.5em;
  font-family: var(--font-condensed);
  font-weight: 200;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Tab = styled.span`
  position: relative;

  &:hover {
    &::before {
      content: '';
      position: absolute;
      top: calc(100% + 5px);
      left: 0;
      background-color: var(--white);
      height: 2px;
      width: 100%;
      display: block;
    }
  }
`;

const Detail = styled.div`
  
  h1 {
    margin-top: 1em;
    font-size: clamp(2rem, 16vw, 100px);
    line-height: 0;
    text-transform: uppercase;
    font-family: var(--font-bellefair);
  }
  
  p {
    font-family: var(--font-barlow);
    font-weight: 200;
    width: min(400px, 100%);
    line-height: 22px;
  }
  
  hr {
    border: none;
    height: 1px;
    background-color: #383B4B;
    margin: 2em 0;
  }

  .flex {
    display: flex;
    > div {
      flex: 1;
    }
    
    small {
      font-family: var(--font-condensed);
      text-transform: uppercase;
      font-size: 14px;
      letter-spacing: 2px;
    }
    
    p {
      font-family: var(--font-bellefair);
      font-size: 28px;
      text-transform: uppercase;
    }
  }


  @media (max-width: 768px) {
    
    p {
      margin-left: auto;
      margin-right: auto;
    }
  }
`;