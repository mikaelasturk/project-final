import { Outlet, NavLink } from "react-router-dom"
import styled from "styled-components"
import { useState, useEffect } from "react"
import { API_URL } from "../../Constants"

const PageWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.black};
`

const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 28px 22px;
  background: ${({ theme }) => theme.colors.darkGrey};
  width: 25%;
`

const AvatarRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 0;
  margin-bottom: 14px;
`

const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.lightGrey};
  flex-shrink: 0;
`

const MemberName = styled.span`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`

const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 14px 14px;
  background: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.gold};
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid transparent;

  &.active {
    border-color: ${({ theme }) => theme.colors.gold};
  }
`

const StyledMain = styled.main`
  flex: 1;
  background: ${({ theme }) => theme.colors.darkGrey};
  padding: 40px;

  > h1,
  > h2,
  > div > h1,
  > div > h2 {
    text-align: center;
    position: relative;
    left: -12.5vw;
  }
`

export const MedlemsportalLayout = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  const [firstName, setFirstName] = useState("")

  useEffect(() => {
    fetch(`${API_URL}/dashboard/${user.id}`, {
      headers: { "Authorization": `Bearer ${user.accessToken}` }
    })
      .then(response => response.json())
      .then(data => {
        console.log("Dashboard response:", data)
        if (data.user?.firstName) setFirstName(data.user.firstName)
      })
      .catch(() => {})
  }, [])

  return (
    <PageWrapper>
      <Sidebar>
        <AvatarRow>
          <Avatar />
          <MemberName>{firstName}</MemberName>
        </AvatarRow>
        <StyledNavLink to="mina-sidor">Mina Sidor</StyledNavLink>
        <StyledNavLink to="medlemskap">Medlemskap</StyledNavLink>
        <StyledNavLink to="events">Events</StyledNavLink>
        <StyledNavLink to="erbjudanden">Erbjudanden</StyledNavLink>
      </Sidebar>
      <StyledMain>
        <Outlet />
      </StyledMain>
    </PageWrapper>
  )
}