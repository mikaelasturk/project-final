import { EventCard } from '../components/pages/events/EventCard'
import { PageTitle } from '../components/reusable/typography/PageTitle'


export const Events = ({ variant }) => {
  return (
    <>
      <PageTitle variant="konto">Events</PageTitle>
      <EventCard />
    </>
  )
}

