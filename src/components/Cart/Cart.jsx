import React from 'react'
import styled from 'styled-components'
import { Container } from '../styles'
import { connect } from 'react-redux'

import Item from './Item'

const Cart = ({ products }) => {
    console.log(products)
    return (
        <Container style={{ "flexDirection": "column" }}>
            <ShoppingCart>
                <thead>
                    <tr>
                        <th style={{ "flex": "2", "textAlign": "left" }}>Product</th>
                        <th style={{ "flex": "1" }}>Quantity</th>
                        <th style={{ "flex": "1", "textAlign": "right" }}>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length === 0 && (<span style={{ "textAlign": "center", "margin": "20px" }}>There isn't any cart item!</span>)}
                    {products.map((item) => <Item key={item.id} item={item} />)}
                </tbody>
            </ShoppingCart>
            <h2 style={{ "textAlign": "right", "margin": "20px 0" }}>Total: {products.reduce((accQty, cartItem) => accQty + cartItem.Price * cartItem.qty, 0)}$</h2>
        </Container >
    )
}

const ShoppingCart = styled.table`
   width: 100%;
   margin: 100px auto;
   th,tr{
       display: flex;
       justify-content: space-around;
       align-items: center;
       text-transform: uppercase;
       font-size: 1.2rem;
       position: relative;
       margin: 20px 0;
   }
   tr td{
       width: 100%;
       display: flex;
       align-items: center;
       font-weight: 700;
       color: rgb(139,139,139);
       span{
           font-size: 1rem;
           cursor: pointer;
           &:hover{
                color: rgb(20,20,20)
           }
       }
   }
   img{
       height: 200px;
       margin: 0 20px;
   }

`

const mapStateToProps = state => {
    return {
        products: state.shop.cart,
    }
}

export default connect(mapStateToProps)(Cart)
