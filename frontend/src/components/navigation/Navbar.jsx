// [ ] Flytta handleLogout till userStore
// [ ] Ska vi flytta usestate för hamburger-menu till store?
// [ ] Städa upp stylingen här

import styled from "styled-components"
import { NavLink, useNavigate } from "react-router-dom"
import { Button } from "../ui"
import { useContentStore, useUserStore } from "../../store"
import { useState } from "react"
import { HamburgerMenu } from "./HamburgerMenu"

const StyledNavbar = styled.nav`
  background: ${({theme}) => theme.navbar.bgClr};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const StyledNavContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const StyledLogo = styled.img`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 10px 0px 10px 20px;
`

const StyledUl = styled.ul`
  display: none;

  @media (min-width: ${({theme})=> theme.breakpoints.tablet}) {
    display: flex;  
    flex-direction: row;
    gap: 30px;
    align-items: center;
    margin-left: 40px;
  }
`

const StyledItems = styled.li`
  color: ${({theme})=> theme.navbar.txtClr}
`

const StyledButtonWrapper = styled.div`
  margin: 35px 35px 30px 0;
`

export const Navbar = () => {
  const { navbarContent } = useContentStore()
  const { buttons, logoHref, links } = navbarContent
  const { user, resetUserData } = useUserStore()
  const [expanded, setExpanded] = useState(false)
  const navigate = useNavigate()
  const isLoggedIn = !!user?.accessToken

  const handleLogout = () => {
    resetUserData()
    navigate("/logga-in")
  }

  const handleClick = () => {
    setExpanded(prev => !prev)
  }

  return (
    <StyledNavbar $expanded={expanded}>
      <StyledNavContentContainer>
      <a href={logoHref} target="_blank" rel="noreferrer">
        <StyledLogo src="/media/logo/Color logo - no background.png"/>
      </a>
      <StyledUl>
        <StyledItems><NavLink to="/om-medlemskap">{links.omMedlemskap}</NavLink></StyledItems>
        <StyledItems><NavLink to="/konto">{links.konto}</NavLink></StyledItems>
      </StyledUl>
      <HamburgerMenu expanded={expanded} onToggle={handleClick} />
    </StyledNavContentContainer>
      <StyledButtonWrapper>
        {isLoggedIn
          ? <Button onClick={handleLogout} text={buttons.logOut} variant="omMedlemskap-login" />
          : <NavLink to="/logga-in"><Button text={buttons.logIn} variant="omMedlemskap-login" /></NavLink>
        }
      </StyledButtonWrapper>
    </StyledNavbar>
  )
}

