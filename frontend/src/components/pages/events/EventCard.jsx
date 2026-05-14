import styled from "styled-components"
import { CardTitle, BodyText } from "../../typography"
import { useContentStore } from "../../../store"

const StyledCard = styled.div``

export const EventCard = () => {
  const { eventContent } = useContentStore()
  const { card } = eventContent

  return (
    <StyledCard>
      <img alt=""/>
      <CardTitle text={card.heading}/>
      <BodyText text={card.description} />
    </StyledCard>
  )
}