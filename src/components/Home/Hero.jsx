import React from 'react'
import { HeroDiv, Button } from './styles'
import ImageWithSkeleton from "../atoms/ImageWithSkeleton";
const Hero = () => {
    return (
        <HeroDiv>
            <ImageWithSkeleton src="https://static.staff-clothes.com/uploads/media/default/0002/05/963690d6f73c4f9fa36fa91f59023fe0.jpeg" aspectRatio="16 / 5" alt="wrapper" />
            <Button to='/shop'>Go to shop</Button>
        </HeroDiv>
    )
}

export default Hero
