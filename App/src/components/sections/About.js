import React from 'react'
import styled from 'styled-components'
import Carousel from '../Carousel'
import Button from '../Button'
import { ThemeProvider } from 'styled-components'
import { dark } from '../../styles/Themes'
import { useNavigate } from 'react-router-dom'

const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
position: relative;

`
const Container = styled.div`
width: 80%;
margin: 0 auto;

display: flex;
justify-content: center;
align-items: center;
`
const Box = styled.div`
width: 50%;
height: 100%;
dsiplay: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Title = styled.h2`
font-size: ${(props) => props.theme.fontxxl};
text-transform: capitalize;
color: #fff;
align-self: flex-start;
width: 80%;
margin: 0 auto;
`

const SubText = styled.h2`
font-size: ${(props) => props.theme.fontlg};
color: #fff;
align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight: 400;
`

const SubTextLight = styled.h2`
font-size: ${(props) => props.theme.fontmd};
color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight: 400;
`

const ButtonContainer = styled.div`
width: 80%;
align-self: flex-start;
margin: 1rem auto;
`

const About = () => {

  return (
    <Section id='about'> 
      <Container>
        <Box> <Carousel /> </Box>
        <Box> 
          <Title>
            Welcome To The Hood Fellow User.
          </Title>
          <SubText>
            The THRASH HOODIE is a private collection of NFTs—unique digital collectibles. The THRASH Hoodies are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.
          </SubText>
          <SubTextLight>
            With more than 100+ (that's a lot) traits, each NFT is unique and comes with a membership to an exclusive group of successful investors. Join an ambitious ever-growing community with multiple benefits and utilities.
          </SubTextLight>
          <ButtonContainer>
          <ThemeProvider theme={dark}>
            <Button link={'https://discord.gg/wkTKKWAc'} text={'JOIN OUR DISCORD'} /> 
          </ThemeProvider>
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
  )
}

export default About