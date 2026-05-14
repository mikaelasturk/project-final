import styled from "styled-components"
import { MembershipCard } from "../../components/pages/om-medlemskap/MembershipCard"
import { PageTitle } from "../../components/typography"
import { useContentStore } from "../../store"


const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: row;
    justify-content: center;
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

