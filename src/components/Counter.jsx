import React from 'react'
import styled from 'styled-components'
const Counter = ({ inc, dec, counter }) => {

    return (
        <CounterElement>
            <button onClick={dec}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33333 8H12.6667" stroke="rgb(139,139,139)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <span>{counter}</span>
            <button onClick={inc}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 3.33334V12.6667" stroke="rgb(139,139,139)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.33333 8H12.6667" stroke="rgb(139,139,139)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </CounterElement>
    )
}

const CounterElement = styled.div` 
    border: 1px solid rgb(139,139,139);
    color: rgb(139,139,139);
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: fit-content;
    margin: 50px 0;
    font-size: 1.3rem;
    height: 40px;
    button{
        border: none;
        background: transparent;
        padding-top: 4px;
        cursor: pointer;
        width: 40px;
    }
    span{
        text-align: center;
        margin: 0;
        width: 40px;
    }
`

export default Counter
