import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

const ConfettiComponent = () => {
    const { width, height } = useWindowSize()
    return (
        <Confetti
        gravity={0.07}
          width={width}
          height={height*1.3}
        />
      )
}

export default ConfettiComponent