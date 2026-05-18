// [x] Connect to contentStore
// [ ] Gör userStore och byt ut useState

import styled from 'styled-components'
import { LogInCard } from '../components/pages/logga-in/LogInCard'
import { Button } from "../components/ui"
import { Link, useNavigate } from 'react-router-dom'
import { PageTitle, BodyText } from '../components/typography'
import { useContentStore, useUserStore } from '../store'

const StyledLoggaIn = styled.div`
  background: ${({theme}) => theme.loggaIn.bgClr};
  min-height: 90vh;
`

const StyledContentContainer = styled.div`
  padding-top: 40px;
`

export const LoggaIn = () => {
  const { logInContent, sharedContent } = useContentStore()
  const { pageHeading, pageSubHeading } = logInContent
  const navigate = useNavigate()
  const { setUserData } = useUserStore()


// [ ] ska handleLogin vara på loginCard istället för loginpage??
  const handleLogin = (userData) => {
    setUserData(userData)
    navigate('/konto')
  }


  return (
      <StyledLoggaIn>
        <StyledContentContainer>
          <Button as={Link} to="/" variant="go-back" text={sharedContent.buttons.backToMembership} /> 
          <PageTitle text={pageHeading} />
          <BodyText text={pageSubHeading} />
          <LogInCard handleLogin={handleLogin}/>
      </StyledContentContainer>
     </StyledLoggaIn>
   )
}

