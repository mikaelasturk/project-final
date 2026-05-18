import styled from 'styled-components'
import { MembershipCard } from "../components/pages/om-medlemskap/MembershipCard"
import { Hero } from '../components/pages/om-medlemskap/Hero'
import { useContentStore } from "../store"
import { PageTitle, BodyText } from "../components/typography"

const StyledOmMedlemskap = styled.div`
   background: ${({ theme }) => theme.omMedlemskap.bgClr};
   min-height: 90vh;
`

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  padding: 40px 20px;
  color: ${({ theme }) => theme.omMedlemskap.txtClr};
`

const StyledCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-top: 50px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    justify-content: center;
  }
`

export const OmMedlemskap = () => {
  const { omMedlemskapContent } = useContentStore()

  return (
    <StyledOmMedlemskap>
      <Hero/>
      <StyledContent>
        <PageTitle text={omMedlemskapContent.heading} />
        <BodyText text={omMedlemskapContent.text} />
        <StyledCardContainer>
          <MembershipCard variant="basic" />
          <MembershipCard variant="pro" />
        </StyledCardContainer>
      </StyledContent>
    </StyledOmMedlemskap>
  )
}

