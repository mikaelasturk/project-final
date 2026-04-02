import styled from 'styled-components'
import { Button } from '../../reusable/ui/Button'
import { BodyText, CardTitle } from '../../reusable/typography/typography'
import { useContentStore } from '../../../store/contentStore'
import { SignUpForm } from "./SignUpForm"
import { Link } from 'react-router'

const StyledSignUpCard = styled.div`
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

const StyledTextContainer = styled.div`

`

const StyledSignupContainer = styled.div`
  text-align: center;
`

const StyledLink = styled(Link)`
  text-decoration: underline;
`

export const SignUpCard = () => {
  const { logInContent } = useContentStore()
  const { heading, text, logIn } = logInContent

  return (
    <StyledSignUpCard >
      <StyledTextContainer>
        <CardTitle text={heading.signUp} />
        <BodyText text={text.signUp} />
      </StyledTextContainer>
      <SignUpForm />
      <StyledSignupContainer>
        <BodyText text={logIn.text}><StyledLink to={logIn.linkTo}>{logIn.linkText}</StyledLink></BodyText>
      </StyledSignupContainer>
    </StyledSignUpCard>
  )
}