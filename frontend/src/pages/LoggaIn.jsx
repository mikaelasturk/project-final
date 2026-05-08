// [x] Connect to contentStore
// [ ] Gör userStore och byt ut useState

import styled from 'styled-components'
// import { useContentStore } from '../store/contentStore'
// import { PageTitle, BodyText } from '../components/reusable/typography/typography'
import { LogInCard } from '../components/pages/logga-in/LogInCard'
import { Button } from "../components/reusable/ui/Button"
import { Link } from 'react-router'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const StyledLoggaIn = styled.div`
  background: ${({theme}) => theme.loggaIn.bgClr};
  min-height: 90vh;
`

const StyledContentContainer = styled.div`
  padding-top: 40px;
`

export const LoggaIn = () => {
  // const { logInContent } = useContentStore()
  // const { heading, description } = logInContent
  const [user, setUser] = useState(null)
  const navigate = useNavigate()


// [ ] ska handleLogin vara på loginCard istället för loginpage??
  const handleLogin = (userData) => {
    setUser(userData)
    // [ ] Normally one would also set an expiration date for the token
    // and store it in a secure cookie or in a more secure storage.
    // But for now we just store it in localStorage for simplicity.
    localStorage.setItem("user", JSON.stringify(userData))
    navigate('/konto')
  }


  return (
      <StyledLoggaIn>
        <StyledContentContainer>
          <Button as={Link} to="/" variant="go-back" text="Gå tillbaka" /> 
          {/* <PageTitle text={heading} />
          <BodyText text={description} /> */}
          <LogInCard handleLogin={handleLogin}/>
      </StyledContentContainer>
     </StyledLoggaIn>
   )
}

