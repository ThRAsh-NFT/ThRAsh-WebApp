import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import DrawSvg from '../DrawSvg'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

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
width: 70%;
height: 200vh;
background-color: ${props => props.theme.boody};
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
position: relative;
`

const SvgContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const Items = styled.ul`
list-style: none;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

&>*:nth-of-type(2n+1) {
  justify-content: start;

  div{
    border-radius: 50px 0 50px 0;
    text-align: right;
  }
  p{
    border-radius: 40px 0 40px 0;
  }
}

&>*:nth-of-type(2n) {
  justify-content: end;

  div{
    border-radius: 0 50px 0 50px;
    text-align: left;
  }
  p{
    border-radius: 0 40px 0 40px;
  } 
}
`

const Item = styled.li`
width: 100%;
height: 100%;
display: flex;
`

const ItemContainer = styled.div`
width: 40%;
height: fit-content;
padding: 1rem;
border: 3px solid ${props => props.theme.text};
`

const Box = styled.p`
height: fit-content;
background-color: ${props => props.theme.carouselColor};
color: ${props => props.theme.text};
padding: 1rem;
position: relative;
border: 1px solid ${props => props.theme.text};
`

const SubTitle = styled.span`
display: block;
font-size: ${props => props.theme.fontxl};
text-transform: capitalize;
color: ${props => props.theme.text};
`

const Text = styled.span`
display: block;
font-size: ${props => props.theme.fontsm};
text-transform: capitalize;
color: ${props => props.theme.text};

font-weight: 400;
margin: 0.5rem 0;
`


const GuidelineItem = ({title, subText, addToRefs}) => {

  return(
    <Item ref={addToRefs}>
      <ItemContainer>
        <Box>
          <SubTitle>{title}</SubTitle>
          <Text>{subText}</Text>
        </Box>
      </ItemContainer>
    </Item>
  )
}

const Guideline = () => {

  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);

  const addToRefs = (el) => {
    if(el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  }

  useLayoutEffect(() => {
    let t1 = gsap.timeline();

    revealRefs.current.forEach((el, index) => {
      t1.fromTo(
        el.childNodes[0],
        {
          y: '0'
        },{
          y:'-30%',

          scrollTrigger:{
            id: `section-${index + 1}`,
            trigger: el,
            start: 'top center += 200px',
            end: 'bottom center',
            scrub: true,
           //  markers: true,
          }
        }
      )
    })

    return () =>{

    };
  }, [])

  return (
    <Section id='guideline'>
      <Title>
        Guideline
      </Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>
          <GuidelineItem addToRefs={addToRefs} title='Origin' subText='ThRAsh NFT was developed by three undergraduate students as their personal project.' />
          <GuidelineItem addToRefs={addToRefs} title='ThRAsh Nft' subText='ThRAsh NFTs are unique and awesome NFTs that were created based on hoodies.' />
          <GuidelineItem addToRefs={addToRefs} title='Upcoming Features' subText='Staking your ThRAsh hoodie and ThRAsh coin are two of the features we aim to add to the ThRAshverse in the future.' />
          <GuidelineItem addToRefs={addToRefs} title='Our Goal' subText='We hope to see our ThRAsh hoodies in the metaverse platform in the near future.' />
          <GuidelineItem addToRefs={addToRefs} title='Special Events' subText='We have also planned to host events (physical and virtual) for our NFT holders, so stay tuned for that as well' />
        </Items>
      </Container>
    </Section>
  )
}

export default Guideline
