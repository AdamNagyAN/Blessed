import React,{ useState } from 'react'
import styled from 'styled-components'

const ProductImages = ({ assets }) => {
    const [index, setIndex] = useState(0);
    const nextImage = () =>{
        setIndex((prev) => prev+1);
    }
    const prevImage = () =>{
        setIndex((prev) => prev-1);
    }
    
    return (
        <Image>
            <img src={assets[index]} alt="" />
            {index > 0 && (
                <button onClick={prevImage} style={{left: 'calc(15% + 20px)'}}>
                <svg width="24" height="28" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 13L1 7L7 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            )}
            {index < assets.length-1 && (
                <button onClick={nextImage}>
                <svg width="24" height="28" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 13L7 7L1 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            )}
        </Image>
    )
}

const Image = styled.div`
    position: relative;
    img{
            width: 70%;
            margin: 20px 15%;
    }
    button{
        position: absolute;
        top: 50%;
        right: calc(15% + 20px);
        font-size: 3rem;
        border: none;
        background: none;
        cursor: pointer;
        & svg path{
            stroke: #b3b3b3;
            transition: all 0.1s ease-in;
        }
        &:hover svg path{
            stroke: rgb(20,20,20);
        }
    }
`

export default ProductImages
