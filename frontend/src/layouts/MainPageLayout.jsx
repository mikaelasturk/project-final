import styled from "styled-components"
import { Outlet } from "react-router-dom"
import { Navbar } from "../components/navigation/Navbar"

const StyledLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const MainPageLayout = () => {

  return (
    <StyledLayout>
      <header>
        <Navbar/>
      </header>
      <main>
        <Outlet />
      </main>
    </StyledLayout>
  )
}