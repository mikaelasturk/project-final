import { Outlet, NavLink } from "react-router-dom"
import styled from "styled-components"
import { useEffect } from "react"
import { useUserStore } from "../store"
import { API_URL } from "../constants/Constants"

const PageWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background: ${({ theme }) => theme.konto.bgClr};
`

const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 28px 22px;
  background: ${({ theme }) => theme.konto.sidebar.bgClr};
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
  background: ${({ theme }) => theme.konto.sidebar.avatar.avatarClr};
  flex-shrink: 0;
`

const MemberName = styled.span`
  color: ${({ theme }) => theme.konto.sidebar.avatar.txtClr};
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`

const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 14px 14px;
  background: ${({ theme }) => theme.konto.sidebar.links.bgClr};
  color: ${({ theme }) => theme.konto.sidebar.links.txtClr};
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid transparent;

  &.active {
    border-color: ${({ theme }) => theme.konto.sidebar.links.borderClrActive};
  }
`

const StyledMain = styled.main`
  flex: 1; // Tar upp återstående utrymme bredvid sidomenyn
  background: ${({ theme }) => theme.konto.mainPage.bgClr};
  padding: 40px;


  //> h1, > h2, > div > h1, > div > h2
  //De träffar rubriker som är:
  //direkta barn till huvudytan
  // rubriker inne i en direkt underliggande div

  > h1,
  > h2,
  > div > h1,
  > div > h2 {
    text-align: center;
    position: relative;
    color: ${({ theme }) => theme.konto.mainPage.headingClr};
    left: -12.5vw; //Rubrikerna flyttas 12.5% till vänster av vp. För att kompensera sidomenyn (25% bred), så rubriken upplevs centrerad över hela sidan istället för bara main page.
    > p,
    > div > div > p {
      color: ${({ theme }) => theme.konto.mainPage.txtClr};
    }
  }
`

export const MedlemsportalLayout = () => {
  const { setUserData, user } = useUserStore()

   console.log(user)

  useEffect(() => {
    const fetchData = async () => {
      if (!user?.id) return
      try {
        const response = await fetch(`${API_URL}/dashboard/${user.id}`, {
          headers: { "Authorization": `Bearer ${user.accessToken}` }
        })
        const data = await response.json()

        console.log("Dashboard response:", data)

        if (data.user) setUserData(data.user)
      } catch (error) {
        console.error("Error fetching dashboard data:", error)
      }
    }
    fetchData()
  }, [user?.id, user?.accessToken, setUserData])

  return (
    <PageWrapper>
      <Sidebar>
        <AvatarRow>
          <Avatar />
          <MemberName>{user?.firstName}</MemberName>
        </AvatarRow>
        <StyledNavLink to="mina-sidor">Mina Sidor</StyledNavLink>
        <StyledNavLink to="medlemskap">Medlemskap</StyledNavLink>
        <StyledNavLink to="events">Events</StyledNavLink>
        <StyledNavLink to="erbjudanden">Erbjudanden</StyledNavLink>
      </Sidebar>
      <StyledMain>
        <Outlet context={{ user }} />
      </StyledMain>
    </PageWrapper>
  )
}