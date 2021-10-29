import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const Options = ({ categories }) => {
    return (
        <div className="options">
                <h2>Categories</h2>
                <ul>
                    {}
                    <li><Label><CheckBox type="checkbox" id="scales" name="scales" /><span>Stlye</span></Label></li>
                    <li><Label><CheckBox type="checkbox" id="scales" name="scales" /><span>Stlye</span></Label></li>
                    
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

const Label = styled.label`
    display: flex;
    align-items: center;
`
const CheckBox = styled.input`
    appearance: none;
    height: 1.2rem;
    width: 1.2rem;
    border-radius: 3px;
    border: 1px solid rgb(139,139,139);
    margin: 0 0.3rem;
    input[type="checkbox" i]
`
export default Options
