import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const Options = ({ categories }) => {
    return (
        <div className="options">
                <h2>Categories</h2>
                <ul>
                    {}
                    <li><input type="checkbox" id="scales" name="scales"/><label htmlFor="scales">Scales</label></li>
                    
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
    )
}

export default Options
