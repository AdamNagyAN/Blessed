import styled from "styled-components";
import { Link } from "react-router-dom";
const darkGrey = 'rgb(20, 20, 20)'

export const HeroDiv = styled.div`
    position: relative;
    width: 100%;
    img {
        width: 100%;
        object-fit: cover;
    }
    @media (max-width: 750px){
        margin-top: 60px;
    }
`
export const Button = styled(Link)`
    position: absolute;
    top: calc(100% - 60px);
    left: 50%;
    transform: translateX(-50%);
    padding: 1rem 1.5rem;
    color: white;
    border: none;
    background: ${darkGrey};
    text-transform: uppercase;
    cursor: pointer;
    font-weight: 700;
    transition: all 0.1s ease-in;
    &:hover{
        background-color: white;
        color: ${darkGrey};
    }
`