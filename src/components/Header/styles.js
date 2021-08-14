import styled from "styled-components";
import { Link } from 'react-router-dom';

export const NavContainer = styled.div`
    margin: 0 auto;
    @media (max-width: 750px){
        margin: 0;
        overflow: hidden;
    }
`

export const NavBar = styled.div`
    display: flex;
    height: 60px;
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    #toggle {
      display: none;
    }
    @media (max-width: 750px){
      margin: 0;
      width: 100%;
      position: fixed;
      background-color: white;
      z-index: 9999;
      flex-direction: column;
      justify-content: center;
      #toggle,
      #shopping_cart {
        display: block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
      }
    }
`

export const Logo = styled(Link)`
    font-weight: 700;
    font-size: 1.5rem;
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
`

export const NavLinks = styled.ul`
    display: flex;
    list-style: none;
    justify-self: flex-end;
    
    @media (max-width: 750px){
        z-index: 9999;
        background-color: white;
        transform: translateX(-100%);
        position: fixed;
        top: 60px;
        left: 0;
        flex-direction: column;
        height: calc(100% - 60px);
        width: 70%;
        justify-content: space-around;
        align-items: center;
        font-size: 1.2rem;
        transition: transform 0.4s ease-in;
        &:hover:after {
          width: 0;
        }
        &.open {
          transform: translateX(0%);
        }
    }
`

export const NavLink = styled.li`
    a {
          position: relative;
          color: rgba(43, 43, 43, 0.911);
          font-weight: 500;
          text-transform: uppercase;
          padding: 7px 10px;
          margin: 0 10px;
          &::after {
            content: "";
            position: absolute;
            height: 2px;
            width: 0;
            background-color: rgb(20, 20, 20);
            bottom: -3px;
            left: 50%;
            transform: translateX(-50%);
            transition: all 0.2s ease-in;
          }
          &:hover:after {
            width: 100%;
          }
          &:hover {
            color: rgb(20, 20, 20);
          }
        }
`

export const SCart = styled.div`
    margin: 0 20px;
    cursor: pointer;
    span {
      background-color: rgb(20,20,20);
      color: rgb(139, 139, 139);
      padding: 1px 3px;
      border-radius: 3px;
    }
    @media (max-width: 750px){
        display: block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
    }
`

export const Toggle = styled.img`
    margin: 0 20px;
    cursor: pointer;
    @media (max-width: 750px){
        display: block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        left: 50%;
    }
`