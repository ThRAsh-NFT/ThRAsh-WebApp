import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LogoText = styled.h1 `
font-family: 'Orbitron', cursive;
font-size: ${props => props.theme.fontxxxl};
color: ${props => props.theme.LogoText};
transition: all 0.2s ease;

&:hover {
    transform: scale(1.1);
}
`

const Logo = () => {
  return (
    <LogoText>
        <Link to='/'>
            ThRAsh
        </Link>
    </LogoText>
  )
}

export default Logo