import styled from "styled-components"
import { CardTitle, BodyText } from "../../typography"
import { useContentStore } from "../../../store"
import { EventDateTag } from "./EventDateTag"
import { Button } from "../../ui/"

const StyledCardContainer = styled.div`
  display: grid;
    grid-template-columns: repeat(1, minmax(300px, 400px));
  gap: 16px;
  justify-content: center;


  @media (min-width: ${({theme})=> theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, minmax(250px, 500px));
  }
`

const StyledCard = styled.div`
  background: ${({ theme }) => theme.konto.mainPage.events.cards.bgClr};
  border: 1px solid #444;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  width: 100%;
`

const StyledImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  display: block;
`

const StyledTextContainer = styled.div`
  padding: 12px 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`

const StyledBottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: auto;
  background: ${({ theme }) => theme.konto.mainPage.events.cards.bgClr};
`

const StyledBottomRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`


export const EventCard = () => {
 const {eventContent} = useContentStore()
  const { events } = eventContent

  return (
    <StyledCardContainer>
      {events.map((event) => (
        <StyledCard key={events.id}>
          <StyledImage img={events.image} alt=""/>
          <EventDateTag text={event.date}/>
          <StyledTextContainer>
          <CardTitle text={events.title}/>
          <BodyText variant="event" text={event.desc}/>
          <StyledBottomRow>
            <BodyText variant="event" text={event.city}/>
            <StyledBottomRight>
              <BodyText variant="event" text={event.price}/>
              <Button variant="event" text={eventContent.button}/>
            </StyledBottomRight>
          </StyledBottomRow>
          </StyledTextContainer>
        </StyledCard>
      ))}
    </StyledCardContainer>
  )
}
