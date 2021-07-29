import React, { useState, useEffect } from 'react'
import Product from '../components/Shop/Product'
import '../styles/shop.scss'
import { Link, useLocation } from 'react-router-dom'
import * as queryString from 'querystring'

const Shop = () => {
    const [list, setList] = useState([
        {
            name: 'T-Shirt 1',
            image: 'https://www.mydesignation.com/wp-content/uploads/2020/08/theyyam-tshirt-mydesignation-image-.jpg',
            price: '10$'
        },
        {
            name: 'T-Shirt 2',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6CIbyohz_cDBJ6g5Xi4nMXIR9ob1wIixyGQ&usqp=CAU',
            price: '10$'
        },
        {
            name: 'T-Shirt 3',
            image: 'https://www.mydesignation.com/wp-content/uploads/2020/08/theyyam-tshirt-mydesignation-image-.jpg',
            price: '10$'
        },
        {
            name: 'T-Shirt 4 basic',
            image: 'https://www.mydesignation.com/wp-content/uploads/2020/08/theyyam-tshirt-mydesignation-image-.jpg',
            price: '10$'
            ['t-shirt', 'basic']
        },
        {
            name: 'T-Shirt 4 basic',
            image: 'https://www.mydesignation.com/wp-content/uploads/2020/08/theyyam-tshirt-mydesignation-image-.jpg',
            price: '10$',
            tags: ['t-shirt', 'basic']
        }
    ]);
    const location = useLocation();
    console.log(location.search.split('?'))
    

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
                    <li><a href="#">S</a></li>
                    <li><a href="#">M</a></li>
                    <li><a href="#">L</a></li>
                </ul>
            </div>
            <div className="products">
                {list.map((item) => {
                    return (<Product {...item}/>)
                })}
            </div>
        </div>
    )
}

export default Shop
