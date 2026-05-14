// [ ] Gör userStore och byt ut useState överallt, sök på useState i hela appen

import styled from 'styled-components'
import { SignUpCard } from '../components/pages/bli-medlem/SignUpCard'
import { Button } from "../components/ui"
import { Link } from 'react-router'
import { useNavigate } from 'react-router'
import { useContentStore, useUserStore } from '../store'


const StyledBliMedlem = styled.div`
  background: ${({theme}) => theme.loggaIn.bgClr};
  min-height: 90vh;
`

const StyledContentContainer = styled.div`
  padding-top: 40px;
`

export const BliMedlem = () => {
  const navigate = useNavigate()
  const { sharedContent } = useContentStore()
  const { buttons } = sharedContent
  const { setUserData } = useUserStore()


  const handleSignUp = (userData) => {
    setUserData(userData)
  navigate('/konto')
  }
  return (
      <StyledBliMedlem>
        <StyledContentContainer>
          <Button as={Link} to="/" variant="go-back" text={buttons.backToMembership} /> 
          <SignUpCard handleSignUp={handleSignUp} />
      </StyledContentContainer>
     </StyledBliMedlem>
   )
}
