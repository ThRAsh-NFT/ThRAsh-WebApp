import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";



import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

import img1 from '../assets/images/31.png'
import img2 from '../assets/images/2.png'
import img3 from '../assets/images/3.png'
import img4 from '../assets/images/34.png'
import img5 from '../assets/images/5.png'
import img6 from '../assets/images/6.png'
import img7 from '../assets/images/7.png'
import img8 from '../assets/images/38.png'
import img9 from '../assets/images/9.png'
import img10 from '../assets/images/10.png'

import Arrow from '../assets/Arrow.svg'



const Container = styled.div`
width: 25vw;
height: 70vh;

.swiper{
    width: 100%;
    height: 100%;
}

.swiper-slide{
    background-color: ${props => props.theme.carouselColor};
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    img{
        display: block;
        width: 100%;
        height: auto;
        object-fit: cover;
    }
}

.swiper-button-next{
    color: ${props => props.theme.text};
    right: 0;
    width: 4rem;

    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after{
        display: none;
    }
}

.swiper-button-prev{
    color: ${props => props.theme.text};
    right: 0;
    width: 4rem;
    transform: rotate(180deg);
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after{
        display: none;
    }
}

`


const Carousel = () => {
  return (
    <Container>
       <Swiper
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
        }}
        pagination={{
            type:'fraction',
        }}
        scrollbar={{
            draggable:true
        }}
        navigation={true} 
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide> <img src={img1} alt='' /> </SwiperSlide>
        <SwiperSlide> <img src={img2} alt='' /> </SwiperSlide>
        <SwiperSlide> <img src={img3} alt='' /> </SwiperSlide>
        <SwiperSlide> <img src={img4} alt='' /> </SwiperSlide>
        <SwiperSlide> <img src={img5} alt='' /> </SwiperSlide>
        <SwiperSlide> <img src={img6} alt='' /> </SwiperSlide>
        <SwiperSlide> <img src={img7} alt='' /> </SwiperSlide>
        <SwiperSlide> <img src={img8} alt='' /> </SwiperSlide>
        <SwiperSlide> <img src={img9} alt='' /> </SwiperSlide>
        <SwiperSlide> <img src={img10} alt='' /> </SwiperSlide>
      </Swiper>
    </Container>
  )
}

export default Carousel

