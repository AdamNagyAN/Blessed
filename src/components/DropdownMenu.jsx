import React, { useState } from 'react';
import styled from 'styled-components';
const DropdownMenu = ({ selected, options }) => {

    return (
        <Select>
            {selected}
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 13L7 7L1 1" stroke="rgb(139,139,139)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </Select>
    );
};

const Select = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-transform: uppercase;
    cursor: pointer;
    height: 40px;
    margin-bottom: 40px;
    width: 122px;
    border-radius: 0px;
    border: 1px solid rgb(139,139,139);
    color: rgb(139,139,139);
    & option{
       padding: 20px; 
    }
    svg{
        position: absolute;
        right: 10px;
        transform: rotate(90deg);
        height: 10px;
    }
`

export default DropdownMenu;
