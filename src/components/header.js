import React from 'react'
import { Link } from 'react-router-dom'
import Bars from './icons/bars.svg'
import ShoppingCart from './icons/shopping_cart.svg'
function header() {
    return (
        <header>
            <div className="container">
                <div className="navbar">
                    <img src={Bars} id="toggle" style={{left: "0"}} />
                    <a href="#" id="logo">BLESSED</a>
                    <nav>
                        <ul className="nav-links">
                            <li className="nav-link"><Link to="/">Home</Link></li>
                            <li className="nav-link"><Link to="/shop">Shop</Link></li>
                            <li className="nav-link"><Link to="/register">Register</Link></li>
                            <li className="nav-link"><Link to="/login">Log in</Link></li>
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
