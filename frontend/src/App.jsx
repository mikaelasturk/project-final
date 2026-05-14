// [ ] Skapa premium route

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import styled, { ThemeProvider } from "styled-components"
import { Theme } from "./themes/Theme"
import { GlobalStyle } from "./styles/GlobalStyle"
import { MainPageLayout, MedlemsportalLayout } from "./layouts"
import { ProtectedRoute } from "./routes"
import { OmMedlemskap, LoggaIn, MinaSidor, Medlemskap, Events, BliMedlem, Erbjudanden } from "./pages"

const AccountHomeTitle = styled.h1`
  color: ${({ theme }) => theme.konto.mainPage.pageTitleClr};
  text-transform: uppercase;
  letter-spacing: 10px;
  text-align: center;
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 48px;
`

export const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<MainPageLayout />}>
            <Route path="/" element={ <Navigate to="/om-medlemskap" replace />}/>
            <Route path="/om-medlemskap" element={<OmMedlemskap />}/>
            <Route path="/logga-in" element={<LoggaIn />}/>
            <Route path="/bli-medlem" element={<BliMedlem/>}/>
            <Route element={<ProtectedRoute />}>
              <Route path="/konto" element={<MedlemsportalLayout />}>
                <Route index element={<AccountHomeTitle>Välkommen till ditt konto!</AccountHomeTitle>} />
                <Route path="mina-sidor" element={<MinaSidor />} />
                <Route path="medlemskap" element={<Medlemskap />} />
                <Route path="events" element={<Events />} />
                <Route path="erbjudanden" element={<Erbjudanden />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
