import React from 'react'
import './shop.scss'
import { Link } from 'react-router-dom'
const Product = ({ id, name, price }) => {
    return (
        <Link to={`/shop/${id}`} className="product-card-container">
                <div className="product-card-img-container">
                    <img src="https://cdn.shopify.com/s/files/1/2406/5155/products/Untitleddesign-2021-06-02T085309.190_400x.png?v=1622653463" className="product-card-img" alt="Product"></img>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69365 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69365 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6054C22.3095 9.9379 22.4518 9.22249 22.4518 8.5C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72719 21.351 5.12076 20.84 4.61V4.61Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="product-card-info">
                    <span className="name">{name}</span>
                    <span className="size">XXL</span>
                    <span className="price">{`$${price}`}</span>
                </div>        
        </Link>
    )
}

export default Product
