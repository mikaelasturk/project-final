import styled from 'styled-components'
import { BodyText, CardTitle } from '../../typography'
import { useContentStore } from '../../../store'
import { SignUpForm } from "./SignUpForm"
import { Link } from 'react-router-dom'

const StyledSignUpCard = styled.div`
  background: ${({theme}) => theme.loggaIn.form.bgClr};
  color: ${({theme}) => theme.loggaIn.form.txtClr};
  width: 80%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  //justify-self: center; // stödjs inte av safari - bytte etill margin auto istället
  padding: 80px 40px;
  //margin-top: 60px;
  margin: 60px auto 0;
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

export const SignUpCard = ({ handleSignUp }) => {
  const { signuUpContent } = useContentStore()
  const { form } = signuUpContent
  const { heading, subHeading, navigateToLogIn } = form
  const { text, linkTo, linkText } = navigateToLogIn

  return (
    <StyledSignUpCard >
      <StyledTextContainer>
        <CardTitle text={heading} />
        <BodyText text={subHeading} />
      </StyledTextContainer>
      <SignUpForm handleSignUp={handleSignUp} />
      <StyledSignupContainer>
        <BodyText text={text}><StyledLink to={linkTo}>{linkText}</StyledLink></BodyText>
      </StyledSignupContainer>
    </StyledSignUpCard>
  )
}