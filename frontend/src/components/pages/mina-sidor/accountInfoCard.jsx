import styled from "styled-components"
import { BodyText } from "../../typography/BodyText"
import { useContentStore } from "../../../store"
import { useOutletContext } from "react-router-dom"

const StyledCardContainer = styled.div`

`

const StyledCard = styled.div`
  background: ${({ theme }) => theme.konto.mainPage.minaSidor.form.cardBgClr};
  width: 80%;
  max-width: 400px;
  padding: 80px 40px;
  margin-top: 60px;
  border-radius: 10px;

  @media (min-width: ${({theme}) => theme.breakpoints.desktop}) {
    width: 50%;
    max-width: 450px;
  }
`

const StyledTextContainer = styled.div`
  background: ${({ theme }) => theme.konto.mainPage.minaSidor.form.bgClr};
  padding: 12px 16px;
  border-radius: 3px;
  height: 20%;
  width: 100%;
  margin: 10px 0;
`

export const AccountInfoCard = () => {
  const { logInContent } = useContentStore()
  const { form } = logInContent
  const { user } = useOutletContext()

  return (
    <StyledCardContainer>
      <StyledCard>
        <BodyText variant="mina-sidor" text={form.firstName}/>
        <StyledTextContainer>
          <BodyText text={user.firstName}/>
        </StyledTextContainer>
          <BodyText variant="mina-sidor" text={form.lastName}/>
        <StyledTextContainer>
          <BodyText text={user.lastName}/>
        </StyledTextContainer>
           <BodyText variant="mina-sidor" text={form.email}/>
        <StyledTextContainer>
          <BodyText text={user.email}/>
        </StyledTextContainer>
           <BodyText variant="mina-sidor" text={form.city}/>
        <StyledTextContainer>
          <BodyText text={user.city}/>
        </StyledTextContainer>
      </StyledCard>
    </StyledCardContainer>
  )
}
