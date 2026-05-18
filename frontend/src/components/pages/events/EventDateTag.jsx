import styled from "styled-components"
import { BodyText } from "../../typography/BodyText"

const StyledDateTagContainer = styled.div`
  position: absolute;
  top: 6px;
  right: 6px;
  background: ${({ theme }) => theme.konto.mainPage.events.cards.tag.bgClr};
  color: ${({ theme }) => theme.konto.mainPage.events.cards.tag.txtClr};
  font-size: 14px;
  padding: 4px 8px;
`

export const EventDateTag = ({ text }) => {

  return (
    <StyledDateTagContainer>
      <BodyText variant="date-tag" text={text} />
    </StyledDateTagContainer>
  )
}