import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { useUserStore } from "../../store"

const StyledSidebar = styled.aside`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 28px 22px;
    background: ${({ theme }) => theme.konto.sidebar.bgClr};
    width: clamp(220px, 25%, 320px);
    min-width: 220px;
    box-sizing: border-box;
  }
`

const AvatarRow = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 8px 0;
`

const Avatar = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${({ theme }) => theme.konto.sidebar.avatar.avatarClr};
  flex-shrink: 0;
`

const MemberName = styled.span`
  color: ${({ theme }) => theme.konto.sidebar.avatar.txtClr};
  text-transform: uppercase;
  letter-spacing: 2.5px;
`

const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 14px 14px;
  background: ${({ theme }) => theme.konto.sidebar.links.bgClr};
  color: ${({ theme }) => theme.konto.sidebar.links.txtClr};
  text-transform: uppercase;
  letter-spacing: 2.5px;
  border: 1px solid transparent;

  &.active {
    border-color: ${({ theme }) => theme.konto.sidebar.links.borderClrActive};
  }
`

export const Sidebar = () => {
  const { user } = useUserStore()

  return (
    <StyledSidebar>
      <AvatarRow>
        <Avatar />
        <MemberName>{user?.firstName}</MemberName>
      </AvatarRow>
      <StyledNavLink to="mina-sidor">Mina Sidor</StyledNavLink>
      <StyledNavLink to="medlemskap">Medlemskap</StyledNavLink>
      <StyledNavLink to="events">Events</StyledNavLink>
      <StyledNavLink to="erbjudanden">Erbjudanden</StyledNavLink>
    </StyledSidebar>
  )
}
