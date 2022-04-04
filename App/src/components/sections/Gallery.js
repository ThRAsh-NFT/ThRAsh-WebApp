import React, { useRef } from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'

import img1 from '../../assets/images/1.png'
import img2 from '../../assets/images/2.png'
import img3 from '../../assets/images/3.png'
import img4 from '../../assets/images/4.png'
import img5 from '../../assets/images/5.png'
import img6 from '../../assets/images/6.png'
import img7 from '../../assets/images/7.png'
import img8 from '../../assets/images/8.png'
import img9 from '../../assets/images/9.png'
import img10 from '../../assets/images/10.png'
import img11 from '../../assets/images/11.png'
import img12 from '../../assets/images/12.png'
import img13 from '../../assets/images/13.png'
import img14 from '../../assets/images/14.png'
import img15 from '../../assets/images/15.png'
import img16 from '../../assets/images/16.png'
import img17 from '../../assets/images/17.png'
import img18 from '../../assets/images/18.png'
import img19 from '../../assets/images/19.png'
import img20 from '../../assets/images/20.png'
import img21 from '../../assets/images/21.png'
import img22 from '../../assets/images/22.png'
import img23 from '../../assets/images/23.png'
import img24 from '../../assets/images/24.png'
import img25 from '../../assets/images/25.png'
import img26 from '../../assets/images/26.png'
import img27 from '../../assets/images/27.png'
import img28 from '../../assets/images/28.png'
import img29 from '../../assets/images/29.png'
import img30 from '../../assets/images/30.png'
import img31 from '../../assets/images/31.png'
import img32 from '../../assets/images/32.png'
import img33 from '../../assets/images/33.png'
import img34 from '../../assets/images/34.png'
import img35 from '../../assets/images/35.png'
import img36 from '../../assets/images/36.png'
import img37 from '../../assets/images/37.png'
import img38 from '../../assets/images/38.png'
import img39 from '../../assets/images/39.png'
import img40 from '../../assets/images/40.png'
import img41 from '../../assets/images/41.png'
import img42 from '../../assets/images/42.png'
import img43 from '../../assets/images/43.png'
import img44 from '../../assets/images/44.png'
import img45 from '../../assets/images/45.png'
import img46 from '../../assets/images/46.png'
import img47 from '../../assets/images/47.png'
import img48 from '../../assets/images/48.png'
import img49 from '../../assets/images/49.png'
import img50 from '../../assets/images/50.png'

import ETH from '../../assets/icons8-ethereum-48.png'


const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.text};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
overflow: hidden;

&>*:first-child{
  animation-duration: 33s;
}

&>*:last-child{
  animation-duration: 30s;
}
`

const move = keyframes`
0%{ transform: translateX(100%) };
100%{ transform: translateX(-100%) }; 
`

const Row = styled.div`
// background-color: lightblue;
white-space: nowrap;
box-sizing: content-box;
margin: 2rem 0;
display: flex;

animation: ${move}  linear infinite ${props => props.direction};
`

const ImgContainer = styled.div`
width: 15rem;
margin: 0 1rem;
background-color: ${props => props.theme.body};

border-radius: 20px;
cursor: pointer;

img{
  width: 100%;
  height: auto;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
`

const Details = styled.div`
display: flex;
justify-content: space-between;
padding: 0.8rem 1rem;
background-color: ${props => props.theme.text};
border: 2px solid ${props => `rgba(${props.theme.bodyRgba}, 0.5)`};

border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;

span{
  font-size: ${props => props.theme.fontsm};
  color: ${props => `rgba(${props.theme.bodyRgba}, 0.5)`};
  font-weight: 600;
  line-height: 1.5rem;
}

h1{
  font-size: ${props => props.theme.fontmd};
  color: ${props => props.theme.body};
  font-weight: 600;
}
`

const Price = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;

img{
  width: 1rem;
  height: auto;
}
`

const NftItem = ({img, number=0, price=0, passRef}) => {

let play = (e) => {
  passRef.current.style.animationPlayState = 'running';
}

let pause = (e) => {
  passRef.current.style.animationPlayState = 'paused';
}

  return(
    <ImgContainer onMouseOver={e => pause(e)} onMouseOut={e => play(e) } >
      <img src={img} alt='' />
      <Details>
        <div>
          <span> Thrash </span> <br />
          <h1>#{number}</h1>
        </div>

        <div>
          <span>Price</span>
          <Price>
            <img src={ETH} alt='ETH' />
            <h1> {Number(price).toFixed(1)}</h1>
          </Price>
        </div>
      </Details>
    </ImgContainer>
  )
}

const Gallery = () => {

const Row1Ref = useRef(null);
const Row2Ref = useRef(null);

  return (
    <Section id='gallery'>
      <Row direction='none' ref={Row1Ref}>
        <NftItem img={img1} number={25} price={0.5} passRef={Row1Ref} />
        <NftItem img={img2} number={44} price={0.9} passRef={Row1Ref} />
        <NftItem img={img3} number={69} price={0.4} passRef={Row1Ref} />
        <NftItem img={img4} number={53} price={0.6} passRef={Row1Ref} />
        <NftItem img={img5} number={10} price={0.6} passRef={Row1Ref} />
        <NftItem img={img6} number={25} price={0.5} passRef={Row1Ref} />
        <NftItem img={img7} number={44} price={0.9} passRef={Row1Ref} />
        <NftItem img={img8} number={69} price={0.4} passRef={Row1Ref} />
        <NftItem img={img9} number={53} price={0.6} passRef={Row1Ref} />
        <NftItem img={img10} number={10} price={0.6} passRef={Row1Ref} />
        <NftItem img={img11} number={10} price={0.6} passRef={Row1Ref} />
        <NftItem img={img12} number={10} price={0.6} passRef={Row1Ref} />
        <NftItem img={img13} number={10} price={0.6} passRef={Row1Ref} />
        <NftItem img={img14} number={10} price={0.6} passRef={Row1Ref} />
        <NftItem img={img15} number={10} price={0.6} passRef={Row1Ref} />
        <NftItem img={img16} number={10} price={0.6} passRef={Row1Ref} />
        <NftItem img={img17} number={10} price={0.6} passRef={Row1Ref} />
        <NftItem img={img18} number={10} price={0.6} passRef={Row1Ref} />
        <NftItem img={img19} number={10} price={0.6} passRef={Row1Ref} />
        <NftItem img={img20} number={10} price={0.6} passRef={Row1Ref} />
        <NftItem img={img21} number={99} price={0.5} passRef={Row1Ref} />
        <NftItem img={img22} number={87} price={0.5} passRef={Row1Ref} />
        <NftItem img={img23} number={420} price={0.3} passRef={Row1Ref} />
        <NftItem img={img24} number={33} price={0.4} passRef={Row1Ref} />
        <NftItem img={img25} number={666} price={0.2} passRef={Row1Ref} /> 
      </Row>
      <Row direction='reverse' ref={Row2Ref}>
        <NftItem img={img26} number={99} price={0.5} passRef={Row2Ref} />
        <NftItem img={img27} number={87} price={0.5} passRef={Row2Ref} />
        <NftItem img={img28} number={420} price={0.3} passRef={Row2Ref} />
        <NftItem img={img29} number={33} price={0.4} passRef={Row2Ref} />
        <NftItem img={img30} number={666} price={0.2} passRef={Row2Ref} /> 
        <NftItem img={img31} number={10} price={0.6} passRef={Row2Ref} />
        <NftItem img={img32} number={10} price={0.6} passRef={Row2Ref} />
        <NftItem img={img33} number={10} price={0.6} passRef={Row2Ref} />
        <NftItem img={img34} number={10} price={0.6} passRef={Row2Ref} />
        <NftItem img={img35} number={10} price={0.6} passRef={Row2Ref} />
        <NftItem img={img36} number={10} price={0.6} passRef={Row2Ref} />
        <NftItem img={img37} number={10} price={0.6} passRef={Row2Ref} />
        <NftItem img={img38} number={10} price={0.6} passRef={Row2Ref} />
        <NftItem img={img39} number={10} price={0.6} passRef={Row2Ref} />
        <NftItem img={img40} number={10} price={0.6} passRef={Row2Ref} />
        <NftItem img={img41} number={10} price={0.6} passRef={Row2Ref} />
        <NftItem img={img42} number={10} price={0.6} passRef={Row2Ref} />
        <NftItem img={img43} number={10} price={0.6} passRef={Row2Ref} />
        <NftItem img={img44} number={10} price={0.6} passRef={Row2Ref} />
        <NftItem img={img45} number={10} price={0.6} passRef={Row2Ref} />
        <NftItem img={img46} number={10} price={0.6} passRef={Row2Ref} />
        <NftItem img={img47} number={10} price={0.6} passRef={Row2Ref} />
        <NftItem img={img48} number={10} price={0.6} passRef={Row2Ref} />
        <NftItem img={img49} number={10} price={0.6} passRef={Row2Ref} />
        <NftItem img={img50} number={10} price={0.6} passRef={Row2Ref} />

      </Row>
    </Section>
  )
}

export default Gallery