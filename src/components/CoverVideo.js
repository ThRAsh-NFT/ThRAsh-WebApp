import React from 'react'
import styled from 'styled-components'
import GIF from '../assets/NftVideo.mp4'


const VideoContainer = styled.div`
width: 100%;
height: 100%;


video{
    width: 100%;
    height; auto;
    border-radius: 30px;
}
`

const CoverVideo = () => {
  return (
    <VideoContainer>
        <video src={GIF} type='video/mp4' autoPlay muted loop />
    </VideoContainer>
  )
}

export default CoverVideo