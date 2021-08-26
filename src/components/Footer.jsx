import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer>
            <FooterContainer>
                <FooterCard>
                    <FooterTitle>About Us</FooterTitle>
                    <FooterText>This shop is created to provide quality clothes for acceptable price!</FooterText>
                </FooterCard>
                <FooterCard>
                    <FooterTitle>Help</FooterTitle>
                    <FooterList>
                        <FooterLink to="/">FAQ</FooterLink>
                        <FooterLink to="/">Email Support</FooterLink>
                        <FooterLink to="/">Privacy Policy</FooterLink>
                        <FooterLink to="/">Terms</FooterLink>
                    </FooterList>
                </FooterCard>
                <FooterCard>
                    <FooterTitle>SocialMedia</FooterTitle>
                    <FooterList>
                        <FooterLink to="/">Instagram</FooterLink>
                        <FooterLink to="/">Facebook</FooterLink>
                    </FooterList>
                </FooterCard>
            </FooterContainer>
            <Copyright>© Blessed 2021 | Nagy Ádám</Copyright>
        </footer>
    )
}

const FooterContainer = styled.div`
    background-color: rgb(20,20,20);
    text-transform: uppercase;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

const FooterCard = styled.div`
    margin: 20px;
    width: calc(33.333% - 40px);
    @media (max-width: 750px){
        width: 100%;
        text-align: center;
    }
`

const FooterTitle = styled.h2`
    color: white;
    font-weight: 500;
    margin: 30px 0;
    font-size: 1.3rem
`

const FooterText = styled.p`
    color: rgb(139,139,139);
    font-size: 1.1rem;
    line-height: 2rem;
`
const FooterList = styled.ul`
    display: flex;
    flex-direction: column;
`

const FooterLink = styled(Link)`
    color: rgb(139,139,139);
    transition: all 0.1s ease-in;
    font-size: 1.1rem;
    margin-bottom: 20px;
    &:hover{
        color: white;
    }
`

const Copyright = styled.p`
    color: white;
    background-color: rgb(20,20,20);
    font-weight: 500;
    text-align: right;
    padding: 10px 20px 0 0;
    font-size: 1.2rem;
`

export default Footer
