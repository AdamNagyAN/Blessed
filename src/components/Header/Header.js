import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Bars from './bars.svg'
import ShoppingCart from './shopping_cart.svg'
import { NavContainer, NavBar as NavBlock, Logo, Nav, NavLinks, NavLink, SCart, Toggle } from './styles'
const NavBar = () => {

    const [navbar, setNavbar] = useState(false)


    return (
        <header>
            <NavContainer>
                <NavBlock>
                    <Toggle src={Bars} onClick={() => setNavbar(!navbar)} alt="toggle button" id="toggle" style={{ left: "0" }} />
                    <Logo to='/'>BLESSED</Logo>
                    <Nav>
                        <NavLinks className={`nav-links ${navbar && 'open'}`}>
                            <NavLink onClick={() => setNavbar(false)}><Link to="/">Home</Link></NavLink>
                            <NavLink onClick={() => setNavbar(false)}><Link to="/shop">Shop</Link></NavLink>
                            <NavLink onClick={() => setNavbar(false)}><Link to="/register">Register</Link></NavLink>
                            <NavLink onClick={() => setNavbar(false)}><Link to="/login">Log in</Link></NavLink>
                        </NavLinks>
                        <SCart to='/cart' style={{ right: "0px" }}>
                            <img src={ShoppingCart} alt="shopping cart" />
                            <span>0</span>
                        </SCart>
                    </Nav>
                </NavBlock>
            </NavContainer>
        </header>
    )
}

export default NavBar;
