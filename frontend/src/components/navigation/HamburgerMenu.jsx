// [ ] Ska vi lägga auto-stängning av hamburgermenyn?
// [ ] Vill vi att HamburgerMenu ska hantera sin egen state för expanded, eller ska det hanteras i Navbar och skickas ner som prop?
// [ ] Se till så att contentStore och Theme använder samma sid-struktur

import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { useContentStore } from "../../store"


const StyledButton = styled.button`
  color: ${({ theme }) => theme.navbar.txtClr};
  background-color: transparent;
  padding: 12px;
  border: none;
  z-index: 4001;
  position: relative;
  margin-left: 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`

const StyledNavContent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 4000;
  padding: 0 24px 42px 24px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.navbar.bgClr};
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  height: 50vh;
  transition: transform 0.3s ease-in-out, opacity 0.5s ease;
  transform: ${({ $expanded }) => ($expanded ? "translateY(0)" : "translateY(-100%)")};
  opacity: ${({ $expanded }) => ($expanded ? "1" : "0")};
  pointer-events: ${({ $expanded }) => ($expanded ? "all" : "none")};
  visibility: ${({ $expanded }) => ($expanded ? "visible" : "hidden")}; // För att förhindra att tabba genom menyn när den är stängd
`

const StyledSpan = styled.span`
  display: block;
  height: 4px;
  width: 40px;
  background: ${({ theme }) => theme.navbar.spanClr};
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

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;
  color: ${({ theme }) => theme.navbar.txtClr};
`

export const HamburgerMenu = ({ expanded, onToggle }) => {
  const { navbarContent } = useContentStore()
  const { links } = navbarContent
  const { omMedlemskap, konto } = links

  return (
    <>
      <StyledButton
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        aria-label="Main menu"
        aria-controls="hamMenuList"
      >
        <StyledFirstSpan $expanded={expanded} aria-hidden="true" />
        <StyledSecondSpan $expanded={expanded} aria-hidden="true" />
        <StyledThirdSpan $expanded={expanded} aria-hidden="true" />
      </StyledButton>
      <StyledNavContent $expanded={expanded}>
        <StyledHamList id="hamMenuList">
          <li><StyledNavLink to="/om-medlemskap" onClick={() => onToggle(false)}>{omMedlemskap}</StyledNavLink></li>
          <li><StyledNavLink to="/konto" onClick={() => onToggle(false)}>{konto}</StyledNavLink></li>
        </StyledHamList>
      </StyledNavContent>
    </>
  )
}
