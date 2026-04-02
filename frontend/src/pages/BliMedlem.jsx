import styled from 'styled-components'
import { SignUpCard } from '../components/pages/bli-medlem/SignUpCard'
import { Button } from "../components/reusable/ui/Button"
import { Link } from 'react-router'

const StyledBliMedlem = styled.div`
  background: ${({theme}) => theme.loggaIn.bgClr};
  min-height: 90vh;
`

const StyledContentContainer = styled.div`
  padding-top: 40px;
`

export const BliMedlem = () => {

  return (
      <StyledBliMedlem>
        <StyledContentContainer>
          <Button as={Link} to="/" variant="go-back" text="Gå tillbaka" /> 
          <SignUpCard />
      </StyledContentContainer>
     </StyledBliMedlem>
   )
}
