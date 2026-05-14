import { Outlet } from "react-router-dom"
import styled from "styled-components"
import { useEffect, useState } from "react"
import { useUserStore } from "../store"
import { API_URL } from "../constants/Constants"
import { SidebarHamMenu, Sidebar } from "../components/navigation/"


const PageWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background: ${({ theme }) => theme.konto.bgClr};
`


//clamp väljer ett min värde och ett maxvärde och anpassar innehållet till, i det här fallet 25%, när det går

const StyledMain = styled.main`
  flex: 1; // Tar upp återstående utrymme bredvid sidomenyn
  background: ${({ theme }) => theme.konto.mainPage.bgClr};
  padding: 40px 10px;
  box-sizing: border-box;
  overflow-x: hidden;

  // > h1, > h2, > div > h1, > div > h2
  // De träffar rubriker som är:
  // direkta barn till huvudytan
  // rubriker inne i en direkt underliggande div

  > h1 {
    display: flex;
    justify-content: center;
    font-size: 28px;
    text-align: center;
    color: ${({ theme }) => theme.konto.mainPage.headingClr};
     position: relative;
     left: -10vw;
 } 
 > .mina-sidor-page > div {
    display: flex;
    justify-content: center;
    width: 100%;
    position: relative;
    left: -10vw;
 }

`

const PortalPageContent = styled.div`
  > h1,
  > div > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const MedlemsportalLayout = () => {
  const { setUserData, user } = useUserStore()
  const [expanded, setExpanded] = useState(false)

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

  const handleToggle = () => {
    setExpanded(prev => !prev)
  }

  return (
    <PageWrapper>
      <Sidebar />
      <StyledMain>
        <SidebarHamMenu expanded={expanded} onToggle={handleToggle} />
        <PortalPageContent>
          <Outlet context={{ user }} />
        </PortalPageContent>
      </StyledMain>
    </PageWrapper>
  )
}