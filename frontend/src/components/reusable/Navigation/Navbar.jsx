import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { Button } from "../ui/Button"
import { useContentStore } from "../../../store/contentStore"
import { useState } from "react"

const StyledNavbar = styled.nav`
  background: ${({theme}) => theme.colors.black};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const StyledNavContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const StyledLogo = styled.img`
  height: 10vh;
  padding: 20px 0 0 20px;
`

const StyledUl = styled.ul`
  display: none;

  @media (min-width: ${({theme})=> theme.breakpoints.tablet}) {
    display: flex;  
    flex-direction: row;
    gap: 30px;
    margin: 40px 0 10px 35px;
  }
  
`

const StyledItems = styled.li`
  color: ${({theme})=> theme.colors.white}
`

const StyledButtonWrapper = styled.div`
  margin: 35px 35px 30px 0;
`

export const Navbar = () => {
  const content = useContentStore((state) => state.content)
  const [expanded, setExpanded] = useState(false)
  
  const handleClick = () => {
    setExpanded(prev => !prev)
  }

  return (
    <StyledNavbar $expanded={expanded}>
      <StyledNavContentContainer>
      <NavLink to="/">
        <StyledLogo src="/media/logo/Color logo - no background.png"/>
      </NavLink>
      <StyledUl>
        <StyledItems>hem</StyledItems>
        <StyledItems>om oss</StyledItems>
        <StyledItems>kontakt</StyledItems>
        <StyledItems><NavLink to="/om-medlemskap">om medlemskap</NavLink></StyledItems>
        <StyledItems><NavLink to="/konto">konto</NavLink></StyledItems>
      </StyledUl>
        <StyledButton onClick={handleClick}
      aria-expanded={expanded}
      aria-label="Main menu"
      aria-controls="hamMenuList"
      >
        <StyledFirstSpan $expanded={expanded} aria-hidden="true"></StyledFirstSpan>
        <StyledSecondSpan $expanded={expanded} aria-hidden="true"></StyledSecondSpan>
        <StyledThirdSpan $expanded={expanded} aria-hidden="true"></StyledThirdSpan>
      </StyledButton>
      <StyledNavContent $expanded={expanded}>
        <StyledHamList>
          <li><StyledHamItem to="/om-medlemskap">Om medlemskap</StyledHamItem></li>
          <li><StyledHamItem to="/konto">konto</StyledHamItem></li>
        </StyledHamList>
      </StyledNavContent>
    </StyledNavContentContainer>
      <StyledButtonWrapper>
        <NavLink to="/logga-in"><Button text={content.buttons.logIn} variant="omMedlemskap-login"/>
        </NavLink>
      </StyledButtonWrapper>
    </StyledNavbar>
  )
}

const StyledButton = styled.button`
  color: ${({ theme }) => theme.colors.white};
  background-color: transparent;
  padding: 12px;
  border: none;
  z-index: 4001;
  position: relative;
  margin-left: 20px; 

  @media (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    display: none;
  }
`

const StyledNavContent = styled.div`
  position: absolute;
  padding: 0 24px 42px 24px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.black};
  align-items: center;
  width: 100vw;
  height: 50vh;
  transition: transform 0.3s ease-in-out, opacity 0.5s ease;
  transform: ${({ $expanded }) =>
    $expanded ? "translateY(0)" : "translateY(-100%)"};
  opacity: ${({ $expanded }) => ($expanded ? "1" : "0")};
  pointer-events: ${({ $expanded }) => ($expanded ? "all" : "none")};
`;

const StyledSpan = styled.span`
  display: block;
  height: 4px;
  width: 40px;
  background: ${({ theme }) => theme.colors.white};
  margin: 8px 0;
  border-radius: 2px;
  transition: transform 0.4s ease, opacity 0.3s ease;
`


const StyledFirstSpan = styled(StyledSpan)`
  transform: ${({ $expanded }) => ($expanded ? "translateY(12px) rotate(45deg)" : "initial")};
`


const StyledSecondSpan = styled(StyledSpan)`
  opacity: ${({ $expanded }) => ($expanded ? "0" : "initial")};
`


const StyledThirdSpan = styled(StyledSpan)`
  transform: ${({ $expanded }) => ($expanded ? "translateY(-12px) rotate(-45deg)" : "initial")};
`

const StyledHamList = styled.ul`
  list-style: none;
  padding-top: 100px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const StyledHamItem = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
`