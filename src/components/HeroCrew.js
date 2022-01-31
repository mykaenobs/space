import styled from 'styled-components';
import crews from '../data.json';
import { useEffect, useState } from 'react';
import { importCrew } from '../libs/dynamicImport';

const HeroCrew = () => {
  const [tab, setTab] = useState(0);
  const [image, setImage] = useState('')
  const { crew } = crews;
  const person = crew[tab];

  const tabs = (e) => setTab(e.target.dataset.tab);

  useEffect(() => {
    importCrew(person.name.toLowerCase().split(' ').join('-'), setImage);
  }, [tab, person.name]);

  return (
    <Container>
      <InnerContainer>
        <h2><span>02</span> Meet your crew</h2>
        <Flex>
          <Details>
            <span>{person.role}</span>
            <h3>{person.name}</h3>
            <p>{person.bio}</p>
            <Navigations>
              {crews.crew.map((planet, index) => (
                <Navigation key={index} data-tab={index} onClick={tabs} />
              ))}
            </Navigations>
          </Details>
          <Member>
            <img src={image} alt=""/>
          </Member>
        </Flex>
      </InnerContainer>
    </Container>
  );
}

export default HeroCrew;

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
  height: 70vh;
  row-gap: 3em;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Details = styled.div`
  flex: .6;
  color: var(--white);
  span {
    font-family: var(--font-bellefair);
    opacity: .5;
    font-size: clamp(.8rem, 3vw, 32px);
    text-transform: uppercase;
  }  
  h3 {
    font-family: var(--font-bellefair);
    font-size: clamp(1.2rem, 5vw, 56px);
    margin: 0;
    text-transform: uppercase;
  }
  p {
    font-family: var(--font-barlow);
    font-size: 16px;
    font-weight: 200;
    width: min(400px, 100%);
    line-height: 25px;
  }
  
  @media (max-width: 768px) {
    margin-top: 2em;
    text-align: center;
    
    h3 {
      margin: .3em 0;  
    }
    
    p {
      margin: 0 auto;
    }
  }  
`;

const Navigations = styled.div`
  display: inline-flex;
  column-gap: 1em;
  margin-top: 5em;
`;

const Navigation = styled.span`
  background-color: var(--white);
  width: 10px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  opacity: 0;
`;

const Member = styled.div`
  flex: .4;
  img {
    display: block;
    width: min(420px, 100%);
    transform: translateY(29px);
  }

  @media (max-width: 768px) {
    img {
      transform: translateY(0);
    }
  }
  
`;