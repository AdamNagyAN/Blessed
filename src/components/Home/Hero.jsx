import React from 'react'
import { Link } from 'react-router-dom'
import { HeroDiv, Button } from './styles'
const Hero = () => {
    return (
        <HeroDiv>
            <img src="https://static.staff-clothes.com/uploads/media/default/0002/05/963690d6f73c4f9fa36fa91f59023fe0.jpeg" alt="wrapper" />
            <Button to='/shop'>Go to shop</Button>
        </HeroDiv>
    )
}

export default Hero
