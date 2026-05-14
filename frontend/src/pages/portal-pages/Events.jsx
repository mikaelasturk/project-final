import styled from 'styled-components'

//Hur gör vi detta för att korta ner koden? 
//const theme = theme.konto.mainPage.events

const PageTitle = styled.h2`
  color: ${({ theme }) => theme.konto.mainPage.pageTitleClr};
  text-transform: uppercase;
  letter-spacing: 10px;
  text-align: center;
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 32px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`

const Card = styled.div`
  background: ${({ theme }) => theme.konto.mainPage.events.cards.bgClr};
  border: 1px solid #444;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`

const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  display: block;
`

const DateBadge = styled.span`
  position: absolute;
  top: 6px;
  right: 6px;
  background: ${({ theme }) => theme.konto.mainPage.events.cards.tag.bgClr};
  color: ${({ theme }) => theme.konto.mainPage.events.cards.tag.txtClr};
  font-size: 14px;
  padding: 4px 8px;
`

const CardBody = styled.div`
  padding: 12px 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`

const CardBottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: auto;
`

const CardCity = styled.p`
  color: ${({ theme }) => theme.konto.mainPage.events.cards.textClr.p};
  font-size: 18px;
`

const CardBottomRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const CardTitle = styled.h3`
  color: ${({ theme }) => theme.konto.mainPage.events.cards.textClr.p};
  font-size: 20px;
  font-weight: 600;
`

const CardDesc = styled.p`
  color: ${({ theme }) => theme.konto.mainPage.events.cards.textClr.p};
  font-size: 16px;
  line-height: 1.4;
  margin-bottom: 100px;
`

const CardMeta = styled.p`
  color: ${({ theme }) => theme.konto.mainPage.events.cards.textClr.p};
  font-size: 18px;
`

const AnmalBtn = styled.button`
  background: ${({ theme }) => theme.konto.mainPage.events.cards.button.bgClr};
  color: ${({ theme }) => theme.konto.mainPage.events.cards.button.txtClr};
  border: none;
  font-size: 15px;
  padding: 8px 14px;
  cursor: pointer;
`

const mockEvents = [
  { id: 1, date: "24 mars", title: "Event title", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", meta: "100kr", city: "Stockholm" },
  { id: 2, date: "7 april", title: "Event title", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", meta: "100kr", city: "Göteborg" },
  { id: 3, date: "19 maj", title: "Event title", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", meta: "100kr", city: "Malmö" },
  { id: 4, date: "31 maj", title: "Event title", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", meta: "100kr", city: "Stockholm" },
]

export const Events = () => {
  return (
    <>
      <PageTitle>Events</PageTitle>
      <Grid>
        {mockEvents.map((event) => (
          <Card key={event.id}>
            <CardImage src="https://placehold.co/300x110/555/aaa" alt={event.title} />
            <DateBadge>{event.date}</DateBadge>
            <CardBody>
              <CardTitle>{event.title}</CardTitle>
              <CardDesc>{event.desc}</CardDesc>
              <CardBottomRow>
                <CardCity>{event.city}</CardCity>
                <CardBottomRight>
                  <CardMeta>{event.meta}</CardMeta>
                  <AnmalBtn>Anmäl dig här</AnmalBtn>
                </CardBottomRight>
              </CardBottomRow>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </>
  )
}

