import styled from "styled-components"
import { MembershipCard } from "../components/pages/om-medlemskap/MembershipCard"

const PageTitle = styled.h2`
  color: ${({ theme }) => theme.konto.mainPage.pageTitleClr};
  text-transform: uppercase;
  letter-spacing: 10px;
  text-align: center;
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 40px;
`

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: row;
    justify-content: center;
    left: -7vw;
  }
`

export const Medlemskap = () => {
  return (
    <>
      <PageTitle>Medlemskap</PageTitle>
      <CardsWrapper>
        <MembershipCard variant="basic" />
        <MembershipCard variant="pro" />
      </CardsWrapper>
    </>
  )
}

