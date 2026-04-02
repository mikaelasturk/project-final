// [x] Connect to contentStore

import styled from 'styled-components'
// import { useContentStore } from '../store/contentStore'
// import { PageTitle, BodyText } from '../components/reusable/typography/typography'
import { LogInCard } from '../components/pages/logga-in/LogInCard'
import { Button } from "../components/reusable/ui/Button"
import { Link } from 'react-router'

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

  return (
      <StyledLoggaIn>
        <StyledContentContainer>
          <Button as={Link} to="/" variant="go-back" text="Gå tillbaka" /> 
          {/* <PageTitle text={heading} />
          <BodyText text={description} /> */}
          <LogInCard />
      </StyledContentContainer>
     </StyledLoggaIn>
   )
}

