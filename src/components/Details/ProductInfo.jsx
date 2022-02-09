import React, { useState } from 'react';
import styled from 'styled-components';
import Counter from '../Counter';
import { connect } from 'react-redux'
import Select from 'react-select';

import Message from '../Message';
import { addToCart } from '../../redux/Cart/cart-actions';


const ProductInfo = ({ id, item, addToCart, cart }) => {
    const [msg, setMsg] = useState(null);
    const [counter, setCounter] = useState(1)
    const sizes = Object.keys(item.Sizes).map(key => ({ label: key, value: key }));
    console.log(sizes);
    const exists = cart.find(cartItem => cartItem.id === id) ? "This product is already in your shopping cart!" : "Product added to shopping cart!";
    return (
        <InfoContainer>
            <Title>{item.Name}</Title>
            <Price>{item.Price} UAH</Price>
            <Description>{item.Description}</Description>
            <Counter inc={() => setCounter(prev => (prev < 10 ? prev + 1 : 10))} dec={() => setCounter(prev => (prev > 1 ? prev - 1 : 1))} counter={counter} />
            <Select style={{ "width": "130px" }} options={sizes} />
            <Button onClick={() => { addToCart({ id, ...item, qty: counter }); setMsg(exists) }}>Add to cart</Button>
            <Message msg={msg} />
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

const mapDispatchToProps = dispach => ({
    addToCart: item => dispach(addToCart(item))
})

const mapStateToProps = ({ shop: { cart } }) => ({
    cart: cart
})


export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo);
