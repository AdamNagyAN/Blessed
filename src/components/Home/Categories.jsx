import React from 'react'
import styled from 'styled-components'
import { Button } from './styles'
const Categories = () => {
    return (
        <CategoryContainer>
            <Card style={{gridArea: 'a'}}>
                <img src="https://cdn.shopify.com/s/files/1/2406/5155/products/Untitleddesign-2021-06-02T085309.190_400x.png?v=1622653463" alt="" />
                <CardTitle>Men</CardTitle>
                <Button to='/shop'>Go to shop</Button>
            </Card>
            <Card style={{gridArea: 'b'}}>
                <img src="https://cdn.shopify.com/s/files/1/2406/5155/products/Untitleddesign-2021-06-02T085309.190_400x.png?v=1622653463" alt="" />
                <CardTitle>Women</CardTitle>
                <Button to='/shop'>Go to shop</Button>
            </Card>
            <Card style={{gridArea: 'c'}}>
                <img src="https://cdn.shopify.com/s/files/1/2406/5155/products/Untitleddesign-2021-06-02T085309.190_400x.png?v=1622653463" alt="" />
                <CardTitle>Summer</CardTitle>
                <Button to='/shop'>Go to shop</Button>
            </Card>
        </CategoryContainer>
    )
}

const CategoryContainer = styled.div`
    margin: 0 auto;
    max-width: 1500px;
    width: 100%;
    display: grid;
    grid-template-areas: "a b c";
    @media (max-width: 750px){
        grid-template-areas: 
            "a b"
            "c c";
    }
`

const Card = styled.div`
    position: relative;
    margin: 15px 10px 0 10px;
    img{
        width: 100%;
    }
`

const CardTitle = styled.h2`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    color: white;
    font-size: 3rem;
`

export default Categories
