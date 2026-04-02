import styled from "styled-components"
import { CardTitle, BodyText } from "../../reusable/typography/typography"
import { useContentStore } from "../../../store/contentStore"

const StyledCard = styled.div``

export const EventCard = () => {
 const {eventContent} = useContentStore((state) => state.eventContent)
  const { card } = eventContent

  return (
    <StyledCard>
      <img alt=""/>
      <CardTitle text={card.title}/>
      <BodyText />
    </StyledCard>
  )
}