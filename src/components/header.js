import React from 'react'
import Bars from './icons/bars.svg'
import ShoppingCart from './icons/shopping_cart.svg'
import './css/header.css'
function header() {
    return (
        <header>
            <div className="container">
                <div className="navbar">
                    <img src={Bars} id="toggle" style={{left: "0"}} />
                    <a href="#" id="logo">BLESSED</a>
                    <nav>
                        <ul className="nav-links">
                            <li className="nav-link"><a href="#">Home</a></li>
                            <li className="nav-link"><a href="#">Shop</a></li>
                            <li className="nav-link"><a href="#">Register</a></li>
                            <li className="nav-link"><a href="#">Log in</a></li>
                        </ul>
                        <div id="shopping_cart" style={{right: "0px"}}>
                            <img src={ShoppingCart} alt="" />
                            <span>0</span>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default header
