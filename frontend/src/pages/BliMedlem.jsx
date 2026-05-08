// [ ] Gör userStore och byt ut useState

import styled from 'styled-components'
import { SignUpCard } from '../components/pages/bli-medlem/SignUpCard'
import { Button } from "../components/reusable/ui/Button"
import { Link } from 'react-router'
import { useState } from 'react'
import { useNavigate } from 'react-router' 


const StyledBliMedlem = styled.div`
  background: ${({theme}) => theme.loggaIn.bgClr};
  min-height: 90vh;
`

const StyledContentContainer = styled.div`
  padding-top: 40px;
`

export const BliMedlem = () => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()


  const handleSignUp = (userData) => {
    setUser(userData)
    // [ ] Normally one would also set an expiration date for the token
    // and store it in a secure cookie or in a more secure storage.
    // But for now we just store it in localStorage for simplicity.
    localStorage.setItem('user', JSON.stringify(userData))
    navigate('/konto')
  }
  return (
      <StyledBliMedlem>
        <StyledContentContainer>
          <Button as={Link} to="/" variant="go-back" text="Gå tillbaka" /> 
          <SignUpCard handleSignUp={handleSignUp} />
      </StyledContentContainer>
     </StyledBliMedlem>
   )
}
