import React from 'react'
import styled from 'styled-components'

import img1 from '../../assets/images/1.png'
import img2 from '../../assets/images/2.png'
import img3 from '../../assets/images/3.png'
import img4 from '../../assets/images/4.png'
import ConfettiComponent from '../ConfettiComponent'

const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;

`

const Title = styled.h1`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
color: ${props => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
margin: 1rem auto;
border-bottom: 2px solid ${props => props.theme.text};
width: fit-content;
`

const Container = styled.div`
width: 55%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
`

const Item = styled.div`
width: calc(20rem - 4vw);
padding: 1rem 0;
color: ${props => props.theme.body};
margin: 2rem 1rem;
position: relative;
z-index: 5;

backdrop-filter: blur(4px);

border: 2px solid ${props => props.theme.text};
border-radius: 20px;

&:hover{
  img{
    transform:  scale(1.2);
  }
}
`


const ImageContainer = styled.div`
width: 80%;
margin: 0 -0.08rem;
background-color: black;
border: 2px solid ${props => props.theme.text};
padding: 1.6rem;

//border-radius: 20px;
cursor: pointer;

img{
  width: 100%;
  height: auto; 
  border-radius: 50%;
  transition: all 0.3s ease;
}
`

const Name = styled.h2`
font-size: ${props => props.theme.fontlg};
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
color: ${props => props.theme.text};
margin-top: 1rem;
`
const Position = styled.h2`
font-size: ${props => props.theme.fontmd};
display: flex;
align-items: center;
justify-content: center;
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba}, 0.9)`};
font-weight:400;
`

const MemberComponent = ({img, name=' ', position=' '}) => {

  return(
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer> 
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  )
}


const Team = () => {
  return (
    <Section id='team'>
      <ConfettiComponent />
      <Title> Team </Title>
      <Container>
        <MemberComponent img={img4} name={'Aslam'} position={'Mentor and Blockchain Expert'} />
        <MemberComponent img={img2} name={'Rinoza'} position={'NFT Expert and Designer'} />
        <MemberComponent img={img3} name={'Ashwinth'} position={'Designer And Backend Techie'} />
        <MemberComponent img={img1} name={'Thashin'} position={'Frontend and Backend Techie'} />     
      </Container>
    </Section>
  )
}

export default Team