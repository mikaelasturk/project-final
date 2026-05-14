import styled from "styled-components"
import { MembershipCard } from "../components/pages/om-medlemskap/MembershipCard"
import { PageTitle } from "../components/reusable/typography/PageTitle"
import { useContentStore } from "../store/contentStore"


const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  position: relative;
  margin-left: 50px;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: row;
    justify-content: center;
    left: -7vw;
  }
`

export const Medlemskap = () => {
  const { medlemskapContent } = useContentStore()

  return (
    <>
      <PageTitle variant="konto" text={medlemskapContent.heading} />
      <CardsWrapper>
        <MembershipCard variant="basic" />
        <MembershipCard variant="pro" />
      </CardsWrapper>
    </>
  )
}

