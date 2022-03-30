import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import Accordion from '../Accordion'
import gsap from 'gsap' 
import ScrollTrigger from 'gsap/ScrollTrigger'


const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.text};
position: relative;
color: ${props => props.theme.body};


display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`

const Title = styled.h1`
font-size: ${props => props.theme.fontxxl};
text-transform: uppercase;
color: ${props => props.theme.body};

margin: 1rem auto;
border-bottom: 2px solid ${props => props.theme.body};
width: fit-content;
`

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-content: center;
`

const Box = styled.div`
width: 45%;
`

const Faq = () => {

const ref = useRef(null);
gsap.registerPlugin(ScrollTrigger);
useLayoutEffect(() => {

    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: 'top top',
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
      scrub: true,
      // markers: true,
    })

  return () => {
    ScrollTrigger.kill();
  };
}, [])

  return (
    <Section ref={ref} id='faq'>
      <Title>Faq</Title>
      <Container>
        <Box>
          <Accordion title='WHERE CAN I VIEW MY NFTS?' > 
          Once minted or bought simply connect to your OpenSea account to view your NFTs. 
          </Accordion>
          <Accordion title='WHAT IS THE THRASHVERSE?' > 
          The thrashverse is something similar to the metaverse, which is a network of 3D virtual worlds focused on social connection. In futurism and science fiction, it is often described as a hypothetical iteration of the Internet as a single, universal virtual world that is facilitated by the use of virtual and augmented reality headsets.
          </Accordion>
          <Accordion title='WHY DO WE NEED ROYALTIES?' > 
          The amount of royalties was fixed at 5% to finance the ThRAsh Hoodie projects. We plan on hosting special events, for all the people who own the ThRAsh NFT.
          </Accordion>
        </Box>
        <Box>
          <Accordion title='HOW CAN I USE MY NFT?' > 
          You will be able to use your NFT as an avatar in the Metaverse. Holding also means that you are part of "the hood", an exclusive network of investors and entrepreneurs.
          </Accordion>
          <Accordion title='WHAT ARE THE THRASH HOODIES?' > 
          ThRAsh NFT, a unique collection of randomly generated NFT hoodies. Each hoodie is unique and awesome in its own way. 
          </Accordion>
          <Accordion title='WHAT ARE THE FUTURE PLANS?' > 
           The future plans for the Thrash NFT and Thrashverse can be found in our Gitbook.
          </Accordion>
        </Box>
      </Container>
    </Section>
  )
}

export default Faq