// [ ] Behöver Routewrapper path för att redirectas från logga in? Eller räcker det med index pathen?

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import styled, { ThemeProvider } from "styled-components"
import { Theme } from "./themes/theme"
import { GlobalStyle } from "./styles/GlobalStyle"
import { Layout } from "./components/reusable/Layout"
import { MedlemsportalLayout } from "./layouts/layouts"
import { OmMedlemskap, LoggaIn, MinaSidor, Medlemskap, Events, BliMedlem} from "./pages/pages"

const AccountHomeTitle = styled.h2`
  color: ${({ theme }) => theme.colors.gold};
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
          <Route element={<Layout />}>
            <Route path="/" element={ <Navigate to="/om-medlemskap" replace />}/>
            <Route path="/om-medlemskap" element={<OmMedlemskap />}/>
            <Route path="/logga-in" element={<LoggaIn />}/>
            <Route path="/bli-medlem" element={<BliMedlem/>}/>
            <Route path="/konto" element={<MedlemsportalLayout />}>
              <Route index element={<AccountHomeTitle>Välkommen till ditt konto!</AccountHomeTitle>} />
              <Route path="mina-sidor" element={<MinaSidor />} />
              <Route path="medlemskap" element={<Medlemskap />} />
              <Route path="events" element={<Events />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
