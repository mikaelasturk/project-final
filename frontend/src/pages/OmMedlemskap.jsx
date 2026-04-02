import styled from 'styled-components'
import { MembershipCard } from "../components/pages/om-medlemskap/MembershipCard"
import { Hero } from '../components/pages/om-medlemskap/Hero'
import { useContentStore } from "../store/contentStore"
import { PageTitle, BodyText } from "../components/reusable/typography/typography"

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
  margin: 20px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    flex-direction: row;
    gap: 30px;
    justify-content: center;
    
  }
`

export const OmMedlemskap = () => {
  const { content } = useContentStore()

  return (
    <StyledOmMedlemskap>
      <Hero/>
      <StyledContent>
        <PageTitle text={content.heading} />
        <BodyText text={content.text} />
        <StyledCardContainer>
          <MembershipCard variant="basic" />
          <MembershipCard variant="pro" />
        </StyledCardContainer>
      </StyledContent>
    </StyledOmMedlemskap>
  )
}

