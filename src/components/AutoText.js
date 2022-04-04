import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect'

const Title = styled.h2`
font-size: ${(props) => props.theme.fontxxl};
// text-transform: capitalize;
width: 80%;
color: ${(props) => props.theme.text};
align-self: flex-start;

span {
    text-transform: uppercase;
    font-family: 'Akaya Telivigala', cursive;
}
.text-1{
    color: #089cff;
}

.text-2{
    color: #f71111;
}

.text-3{
    color: #26ed29;
}
`

const SubTitle = styled.h3`
font-size: ${props => props.theme.fontlg};
text-transform: capitalize;
color: ${props => 'rgba(${props.theme.textRgba}, (0.6)'};
font-weight: 600;
margin-bottom: 1rem;
width: 80%;
align-self: flex-start;
`

const AutoText = () => {
  return (
    <>
        <Title>
            It's finally here, the awesome and unique THRASH Hoodies.
            <Typewriter 
                options={{
                    autoStart: true, 
                    loop: true,
                }}
                onInit={(typewriter) => {
                typewriter
                .typeString('<span class = "text-1"> All new NFTs! </span>')
                .pauseFor(2000)
                .deleteAll()
                .typeString('<span class = "text-2"> A new epic NFT collection! </span>')
                .pauseFor(2000)
                .deleteAll()
                .typeString('<span class = "text-3"> Thrashverse! </span>')
                .pauseFor(2000)
                .deleteAll()
                .start()
            } } 
            />
        </Title>
    </>
  )
}

export default AutoText