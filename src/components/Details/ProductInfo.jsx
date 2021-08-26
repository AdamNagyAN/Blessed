import React,{ useState } from 'react'
import styled from 'styled-components'
import { commerce } from '../../lib/commerce';

const ProductInfo = ({ id, name, categories, description, price, variant_groups }) => {

    const [counter, setCounter] = useState(1)

    const getDesc = () => {
        return {__html: description}
    }


    return (
        <InfoContainer>
            <Title>{name}</Title>
            <Price>{price.formatted_with_symbol}</Price>
            <Description dangerouslySetInnerHTML={getDesc()}></Description>
            <CounterElement>
                <button onClick={() => setCounter(prev => (prev>1 ? prev-1 : 1)) }>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33333 8H12.6667" stroke="rgb(139,139,139)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <span>{counter}</span>
                <button onClick={() => setCounter(prev => (prev<10 ? prev+1 : 10))}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 3.33334V12.6667" stroke="rgb(139,139,139)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.33333 8H12.6667" stroke="rgb(139,139,139)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </CounterElement>
            <Button onClick={() => commerce.cart.add(id, counter)}>Add to cart</Button>
        </InfoContainer>
    )
}

const InfoContainer = styled.div`
    width: 40%;
    margin: 20px auto;
    padding: 20px;
    @media (max-width: 750px){
        width:80%;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
const Title = styled.h1`
    color: rgba(139,139,139);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 1.8rem;
`

const Price = styled.h2`
    color: rgba(139,139,139);
    font-weight: 500;
    font-size: 1.4rem;
    margin: 20px 0;
`

const CounterElement = styled.div` 
    border: 1px solid rgb(139,139,139);
    color: rgb(139,139,139);
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: fit-content;
    margin: 50px 0;
    font-size: 1.3rem;
    height: 40px;
    button{
        border: none;
        background: transparent;
        padding-top: 4px;
        cursor: pointer;
        width: 40px;
    }
    span{
        text-align: center;
        margin: 0;
        width: 40px;
    }
`

const Description = styled.div`
    color: rgba(139,139,139);
    margin: 20px 0;
    font-size: 1.3rem;
`

const Button = styled.button`
    outline: none;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    padding: 1rem 2rem;
    font-weight: 700;
    color: rgb(20,20,20);
    background: white;
    border: 1px solid rgb(20,20,20);
    transition: all 0.1s ease-in;
    width: 100%;
    &:hover{
        color: white;
        background: rgb(20,20,20);
        border: 1px solid rgb(20,20,20);
    }
`




export default ProductInfo
