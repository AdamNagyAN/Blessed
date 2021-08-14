import React from 'react'
import './Button.scss'
import { Link } from 'react-router-dom'

const STYLES = ['btn-primary', 'btn-outline']

export const Button = ({children, type, onClick, buttonStyle, path}) => {
    const ckeckButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    return (
        <Link to='/'><button classname={`btn ${ckeckButtonStyle}`}>{children}</button></Link>
    )

}
