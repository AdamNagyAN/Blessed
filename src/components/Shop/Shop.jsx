import React, { useState, useEffect } from 'react'
import Product from './Product'
import styled from 'styled-components'
// import './shop.scss'
import { Link } from 'react-router-dom'
import { Container } from '../styles'
import Loader from '../Loader'
import { db } from '../../lib/Config'

const Shop = () => {
    const [list, setList] = useState(null);


    const fetchProducts = async (limit) =>{
        await db.collection("products").onSnapshot((snapshop) => {
            let documents = []
            snapshop.forEach(doc => documents.push(...doc.data(), doc.id))
            // console.log(documents)
        })
    }

    useEffect(() => {
        const unsub = db.collection("products").onSnapshot(snap => {
            let documents = []
            snap.forEach(doc => {
                documents.push({...doc.data(), id: doc.id})
            })
        })

    }, [])
    

    return (
        <Container className='container'>
            <div className="options">
                <h2>Categories</h2>
                <ul>
                    <li><Link to="/shop">All products</Link></li>
                    <li><Link to="/shop">T-Shirts</Link></li>
                    <li><Link to="/shop">Trausers</Link></li>
                    <li><Link to="/shop">Shoes</Link></li>
                </ul>
                <hr />
                <h2>Filter by</h2>
                <h3>Price</h3>
                <h3>Color</h3>
                <h3>Size</h3>
                <ul>
                    <li><Link to="/">S</Link></li>
                    <li><Link to="/">M</Link></li>
                    <li><Link to="/">L</Link></li>
                </ul>
            </div>
            <div className="products" style={{position: 'relative'}}>
                { list ? list.map((item) => (<Product key={item.id} id={item.id} name={item.name} price={item.price.formatted_with_symbol} image={item.media.source}/>)) : (<Loader />)}
            </div>
        </Container>
    )
}


export default Shop
