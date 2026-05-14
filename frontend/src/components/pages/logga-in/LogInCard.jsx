// [x] TODO make button for going back to the membership page. 

import styled from 'styled-components'
import { BodyText, CardTitle } from '../../typography'
import { useContentStore } from '../../../store'
import { LogInForm } from "./LogInForm"
import { Link } from 'react-router-dom'

const StyledLogInCard = styled.div`
  background: ${({theme}) => theme.loggaIn.form.bgClr};
  color: ${({theme}) => theme.loggaIn.form.txtClr};
  width: 80%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-self: center;
  padding: 80px 40px;
  margin-top: 60px;
  border-radius: 10px;

  @media (min-width: ${({theme}) => theme.breakpoints.desktop}) {
    width: 50%;
    max-width: 450px;
  }
`

const StyledTextContainer = styled.div``

const StyledLoginContainer = styled.div`
  text-align: center;
`

const StyledLink = styled(Link)`
  text-decoration: underline;
`

export const LogInCard = ({ handleLogin }) => {
  const { logInContent } = useContentStore()
  const { form } = logInContent
  const { heading, subHeading, navigateToSignUp } = form
  const { text, linkTo, linkText } = navigateToSignUp

  return (
    <StyledLogInCard >
      <StyledTextContainer>
        <CardTitle text={heading} />
        <BodyText text={subHeading} />
      </StyledTextContainer>
      <LogInForm handleLogin={handleLogin} />
      <StyledLoginContainer>
        <BodyText text={text}><StyledLink to={linkTo}>{linkText}</StyledLink></BodyText>
      </StyledLoginContainer>
    </StyledLogInCard>
  )
}