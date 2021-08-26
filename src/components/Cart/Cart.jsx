import React,{ useEffect, useState } from 'react'
import styled from 'styled-components'
import { Container } from '../styles'
import { commerce } from '../../lib/commerce'

const Cart = () => {
    const [cart, setCart] = useState(null)
    useEffect(() => {
        commerce.cart.contents().then((items) => console.log(items));
    }, [])
    return (
        <Container>
            
        </Container>
    )
}

export default Cart
