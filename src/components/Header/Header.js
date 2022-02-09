import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Bars from './bars.svg'
import ShoppingCart from './shopping_cart.svg'
import Hearth from '../icons/heart.svg'
import { NavContainer, NavBar as NavBlock, Logo, Nav, NavLinks, NavLink, SCart, Toggle } from './styles'
const NavBar = ({ itemCount }) => {

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
                            {/* <NavLink onClick={() => setNavbar(false)}><Link to="/register">Register</Link></NavLink>
                            <NavLink onClick={() => setNavbar(false)}><Link to="/login">Log in</Link></NavLink> */}
                        </NavLinks>
                        <SCart to="/favourite" style={{ right: "60px" }}>
                            <img src={Hearth} alt="shopping cart" />
                        </SCart>
                        <SCart to='/cart' style={{ right: "0px" }}>
                            <img src={ShoppingCart} alt="shopping cart" />
                            <span>{itemCount}</span>
                        </SCart>
                    </Nav>
                </NavBlock>
            </NavContainer>
        </header>
    )
}

const mapStateToProps = ({ shop: { cart } }) => {
    return {
        itemCount: cart.length
    }
}

export default connect(mapStateToProps)(NavBar);
