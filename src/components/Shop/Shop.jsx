import React, { useState, useEffect } from 'react'
import Product from './Product'
import './shop.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Shop = () => {
    const [list, setList] = useState(null);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(data => {
                setList(data.data)
                console.log(data.data);
            })
    }, [])
    

    return (
        <div className="container">
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
            <div className="products">
                { list ? list.map((item) => (<Product key={item.id} id={item.id} name={item.title} price={item.price} image={item.image}/>)) : (<div className="loader">Loading...</div>)}
            </div>
        </div>
    )
}

export default Shop
